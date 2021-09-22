import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const SignUp = ({navigation}) => {
    return (
        <Container>
            <StyledText>SignUp</StyledText>
            <Button
            title = "Login"
            onPress={() => navigation.navigate('Login')}
            />
        </Container>
    )
}

export default SignUp;