import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row, TabButton } from './styles'

import barCode from '../../assets/images/bar_code.png'
import creditCard from '../../assets/images/credit_card.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { Navigate } from 'react-router-dom'
import { getTotalPrice } from '../../utils'
import { formataPreco } from '../../components/ProductsList'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}
const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      cpfCardOwner: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter no minimo 5 caracteres')
        .required('O campo é obrigatorio'),
      email: Yup.string()
        .email('Email invalido')
        .required('O campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O CPF deve ter 14 caracteres')
        .max(14, 'O CPF deve ter 14 caracteres')
        .required('O campo é obrigatorio'),
      deliveryEmail: Yup.string()
        .email('Email invalido')
        .required('O campo é obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails devem ser iguais')
        .required('O campo é obrigatorio'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardExpirationMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardExpirationYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullname
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const checkInputHasError = (field: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: formataPreco(totalPrice / i)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br /> Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br /> Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de credito' : 'Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="fullname">Nome completo</label>
                  <input
                    id="fullname"
                    type="text"
                    name="fullname"
                    value={form.values.fullname}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullname') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <Row>
                <InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirme o email</label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
            </>
          </Card>

          <Card title="Pagamento">
            <>
              <TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={barCode} alt="Boleto bancario" />
                Boleto Bancario
              </TabButton>
              <TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={creditCard} alt="Cartão de credito" />
                Cartão de credito
              </TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular Cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cpfCardOwner">CPF titular cartão</label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardNumber">Numero do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.cardExpirationMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano do vencimento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.cardExpirationYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          name="installments"
                          id="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option key={installment.quantity} value="">
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </InputGroup>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            type="submit"
            title="Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
