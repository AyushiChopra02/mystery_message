import React from 'react';


import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here's your verification code: {otp}</Preview>
      <Section style={{ padding: '20px', textAlign: 'center' }}>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{otp}</Text>
        </Row>
        <Row>
          <Button
            href={`http://localhost:3000/verify/${username}`}
            style={{
              color: '#fff',
              backgroundColor: '#007bff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Verify Me
          </Button>
        </Row>
      </Section>
    </Html>
  );
}
