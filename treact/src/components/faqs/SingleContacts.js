import React, { useState } from "react";
import InputMask from 'react-input-mask';
import tw from "twin.macro";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative bg-white py-16`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-12 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(({ textOnLeft }) => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(({ imageSrc }) => [
    `background-image: url("${imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`text-center mt-4 font-black text-3xl sm:text-4xl lg:text-5xl leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = styled.input`
    ${tw`mt-8 first:mt-0 py-3 focus:outline-none font-medium transition duration-300 border-b-2`};
    color: #6c757d;
    border-color: transparent;
    border-bottom-color: #adb5bd;
    font-family: inherit;
    &::placeholder {
        color: #adb5bd;
    }
    &:hover {
        border-bottom-color: #0ABD19;
    }
    &:focus {
        border-bottom-color: #0ABD19;
    }
`;

const PhoneInput = styled(InputMask)`
    ${tw`mt-8 first:mt-0 py-3 focus:outline-none font-medium transition duration-300 border-b-2`};
    color: #6c757d;
    border-color: transparent;
    border-bottom-color: #adb5bd;
    font-family: inherit;
    &::placeholder {
        color: #adb5bd;
    }
    &:hover {
        border-bottom-color: #0ABD19;
    }
    &:focus {
        border-bottom-color: #0ABD19;
    }
`;

const Textarea = styled(Input).attrs({ as: "textarea" })`
    ${tw`h-24 mt-8`}
`;

const SubmitButton = styled(PrimaryButtonBase)`
    ${tw`inline-block mt-12`}
    text-decoration: none;
    border: none;
    background-color: #0ABD19;
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.1);
        text-decoration: none;
    }
`;

const ContactForm = ({
                         heading = "Связаться с нами",
                         submitButtonText = "Отправить",
                         formAction = "#",
                         formMethod = "get",
                         textOnLeft = true,
                     }) => {
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.sendForm('service_jlep30b', 'template_z4l32dg', e.target, 'O_BVdG2df8Ke32Q1x')
            .then((result) => {
                console.log(result.text);
                alert("Сообщение отправлено успешно!");
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                alert("Произошла ошибка при отправке сообщения.");
                setLoading(false);
            });
    };

    return (
        <Container>
            <Heading>{heading}</Heading>
            <TwoColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Form action={formAction} method={formMethod} onSubmit={sendEmail}>
                            <Input type="text" name="name" placeholder="Имя" required />
                            <PhoneInput
                                mask="+7 (999) 999-99-99"
                                placeholder="Номер телефона"
                                maskChar=" "
                                name="phone"
                                required
                            />
                            <Input type="email" name="email" placeholder="Email" required />
                            <Textarea name="message" placeholder="Сообщение" required />
                            <SubmitButton type="submit" disabled={loading}>
                                {loading ? "Отправка..." : submitButtonText}
                            </SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
            </TwoColumn>
        </Container>
    );
};

export default ContactForm;
