import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>OpenTable</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textConteType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textConteType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer sieze="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
