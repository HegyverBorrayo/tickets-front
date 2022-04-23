import { Box, Heading, Link, Text } from "@chakra-ui/react";

export default function LoginHeader() {
  return (
    <Box textAlign='center'>
        <Heading>Sign In to You Account</Heading>
        <Text>
          Or <Link>start you 14 days trial</Link>
        </Text>
    </Box>
  )
}
