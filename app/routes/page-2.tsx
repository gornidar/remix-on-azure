import { RouteComponent, MetaFunction, Link } from "remix";
import { Badge, Stack } from '@chakra-ui/layout';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { CloseButton } from '@chakra-ui/close-button';

const meta: MetaFunction = () => ({
  title: "Page 2",
});

const Page: RouteComponent = () => {
  return (
    <>
      <p>Welcome to Page 2👋</p>

      <p>chakra badge</p>
      <Stack direction='row'>
        <Badge>Default</Badge>
        <Badge colorScheme='green'>Success</Badge>
        <Badge colorScheme='red'>Removed</Badge>
        <Badge colorScheme='purple'>New</Badge>
      </Stack>
      <p style={{padding: '20px'}}>chakra alert</p>
      <Alert status='error' padding={4}>
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
        <CloseButton position='absolute' right='8px' top='8px' />
      </Alert>
      <Link to="/">Go back home.</Link>
    </>
  );
};

export default Page;
export { meta };
