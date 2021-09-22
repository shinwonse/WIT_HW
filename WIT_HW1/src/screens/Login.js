import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled.Text`
    font-size: 30px;
`;

const Login = ({navigation}) => {
    return (
        <Container>
            <StyledText>Login</StyledText>
            <Button
            title = "tab"
            onPress={() => navigation.navigate('Tab')}
            />
        </Container>
    )
}

export default Login;