import { Box, Button, Checkbox, Link, Stack } from '@chakra-ui/react'
import { signIn } from 'api/auth'
import Input from 'components/form/Input'
import useForm from 'hooks/useForm'
import useSessionContext from 'hooks/useSessionContext'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

export default function LoginForm() {
  const { userSession, setUserSession } = useSessionContext()
  const { values, handleChange, handleSubmit, updateValues } = useForm({
    email: '',
    password: '',
  })

  const { mutate, isLoading } = useMutation(signIn, {
    onCompleted: data => {
      console.log('dataaaaaaaaaaaaaaaa, mutation', data)
    },
    onSuccess: (data, variables, context) => {
      console.log('succes', data, variables, context)
    },
    onError: (error, variables, context) => {
      console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onMutate: data => {
      console.log('ddddddd, mutation', data)
    },
  })

  useEffect(() => {
    if (userSession) {
      updateValues(userSession)
    }
  }, [userSession, updateValues])

  return (
    <Box>
      <form onSubmit={handleSubmit(mutate)}>
        <Input
          name='email'
          label='Email'
          autoFocus
          onChange={handleChange}
          value={values.email}
        />
        <Input
          name='password'
          label='Password'
          type='password'
          onChange={handleChange}
          value={values.password}
        />
        <Stack isInline justifyContent='space-between'>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link> Forgot your password?</Link>
          </Box>
        </Stack>
        <Button
          colorScheme='blue'
          type='submit'
          disabled={isLoading}
          width='full'
        >
          Guardar
        </Button>
      </form>
    </Box>
  )
}
