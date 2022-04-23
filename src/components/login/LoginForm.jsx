import { Box, Button, Checkbox, Link, Stack } from '@chakra-ui/react'
import { signIn } from 'api/auth'
import Input from 'components/form/Input'
import useForm from 'hooks/useForm'
import useSessionContext from 'hooks/useSessionContext'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

export default function LoginForm() {
  const { isLogin, editingValue } = useSessionContext()
  const { values, handleChange, handleSubmit, updateValues } = useForm({
    email: '',
    password: '',
  })

  const { mutate, isLoading } = useMutation(signIn, {
    onCompleted: data => {
      console.log('dataaaaaaaaaaaaaaaa', data)
    },
    onSuccess: data => {
      console.log('Se envia todo')
      console.log(data)
    },
    onError: err => {
      console.log('dio error')
    },
    onChange: data => {
      console.log('ddddddd', data)
    },
  })

  useEffect(() => {
    if (editingValue) {
      updateValues(editingValue)
    }
  }, [editingValue, updateValues])

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
