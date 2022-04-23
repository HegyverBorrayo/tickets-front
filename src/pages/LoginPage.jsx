import { Box, Flex } from "@chakra-ui/react";
import LoginForm from "components/login/LoginForm";
import LoginHeader from "components/login/LoginHeader";

export default function LoginPage() {
  return (
    <Flex>
      <Box>
        <Box>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}
