import styled from 'styled-components'

export const Container = styled.form`
display: flex;
flex-direction: column;
color: #fff;
margin: 1rem;

.inputField {
    display: flex;
    flex-direction: column;
}
.inputField label {
    text-transform: uppercase;
}

.inputField input[type=text] {
    color: #cecece;
    font: 700 10px arial, sans-serif;
    border: none;
    height: 1.8rem;
}
.inputField input[type=email] {
    color: #cecece;
    font: 700 10px arial, sans-serif;
    border: none;
    height: 1.8rem;
}
.inputField input[type=password] {
    color: #cecece;
    font-size: 20px;
    border: none;
    height: 1.8rem;
}

#terms {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.inputField + .inputField {
    margin-top: 1rem;
}
.inputField > label {
    margin-bottom: 0.5rem;
}

.button button {
    background: red;
    border: none;
    color: #fff;
    width: 15rem;
    height: 2rem;
    border-radius: 1rem
}

` 