/* eslint-disable camelcase */
import React, { useState } from 'react';
import * as yup from 'yup';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useFormik, FormikProvider, Field, FieldProps, FormikHelpers, Form } from 'formik';
import emailjs from '@emailjs/browser';
import { ContactFormInterface, contactFormInitialValues } from '../../utils/utils';

const RightInfo = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isSuccessfulSubmission, setIsSuccessfulSubmission] = useState<boolean>(false);
    const [isSubmissionFailed, setIsSubmissionFailed] = useState<boolean>(false);
    const validationSchema = yup.object().shape({
        from_name: yup.string().required('How can I address you?'),
        sender_email: yup.string().email('Oops I think it is not an email').required('How can I get back to you?'),
        message: yup.string().required('Anything I can help?'),
    });

    const handleOnSubmit = (value: ContactFormInterface, { resetForm }: FormikHelpers<ContactFormInterface>) => {
        console.log({ value });
        setIsFormSubmitting(true);
        const { from_name, sender_email, message } = value;
        const templateParams = { from_name, sender_email, message };
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '',
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '',
                templateParams,
                process.env.REACT_APP_EMAILJS_API ?? ''
            )
            .then(
                (response) => {
                    console.log({ response });
                    setIsFormSubmitting(false);
                    setIsSuccessfulSubmission(true);
                    resetForm();
                },
                (err) => {
                    console.log(err);
                    setIsFormSubmitting(false);
                    setIsSubmissionFailed(true);
                }
            );
    };
    const formik = useFormik({
        initialValues: contactFormInitialValues,
        validateOnMount: true,
        validationSchema,
        onSubmit: handleOnSubmit,
    });
    return (
        <Box display="flex" sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' }, px: { xs: 3, md: 0 } }} flexDirection="column">
            <Typography variant="h6" sx={{ fontFamily: "'Poopins', sans-serif", color: '#333', fontWeight: 600, pt: { xs: 1, md: 5 }, pb: 1, pr: 2 }}>
                leave me a message
            </Typography>
            {isSuccessfulSubmission && (
                <Alert sx={{ mb: { xs: 1, md: 2 }, width: { xs: '78vw', md: '38vw' } }} severity="success">
                    Response received. Please allow me up to 24 hours to get back to you
                </Alert>
            )}{' '}
            {isSubmissionFailed && (
                <Alert sx={{ mb: { xs: 1, md: 2 }, width: { xs: '78vw', md: '38vw' } }} severity="error">
                    Something went wrong. Please try again later
                </Alert>
            )}{' '}
            <Box display="flex" flexDirection="column" sx={{ minWidth: '40vw', minHeight: { xs: '70vh', md: 0 } }}>
                <FormikProvider value={formik}>
                    <Form>
                        <Box
                            display="flex"
                            sx={{
                                mb: 2,
                                height: { xs: '18vh', md: 'inherit' },
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-between',
                            }}
                        >
                            <Field name="from_name">
                                {({ field, meta }: FieldProps) => {
                                    const { error, touched } = meta;
                                    return (
                                        <TextField
                                            label="Name"
                                            fullWidth
                                            sx={{
                                                maxWidth: { xs: '100vw', md: '19vw' },
                                                my: { xs: 1, md: 0 },
                                                '&.MuiOutlinedInput-input': { border: 'none', borderBottom: 'solid 1px #dfdfdf' },
                                            }}
                                            size="small"
                                            error={!!touched && !!error}
                                            helperText={!!touched && error}
                                            {...field}
                                        />
                                    );
                                }}
                            </Field>
                            <Field name="sender_email">
                                {({ field, meta }: FieldProps) => {
                                    const { error, touched } = meta;
                                    return (
                                        <TextField
                                            label="Email"
                                            fullWidth
                                            sx={{ maxWidth: { xs: '100vw', md: '19vw' } }}
                                            size="small"
                                            error={!!touched && !!error}
                                            helperText={!!touched && error}
                                            {...field}
                                        />
                                    );
                                }}
                            </Field>
                        </Box>

                        <Field name="message">
                            {({ field, meta }: FieldProps) => {
                                const { error, touched } = meta;
                                return (
                                    <TextField
                                        label="How can I help you?"
                                        fullWidth
                                        multiline
                                        minRows={10}
                                        size="small"
                                        error={!!touched && !!error}
                                        helperText={!!touched && error}
                                        {...field}
                                        sx={{ mt: { xs: 2, md: 0 } }}
                                    />
                                );
                            }}
                        </Field>

                        <Button
                            type="submit"
                            variant="text"
                            disabled={!formik.isValid || isFormSubmitting || !formik.dirty}
                            sx={{ color: 'inherit', m: 2 }}
                            endIcon={<ArrowRightAltIcon />}
                        >
                            Submit
                        </Button>
                    </Form>
                </FormikProvider>
            </Box>
        </Box>
    );
};

export default RightInfo;
