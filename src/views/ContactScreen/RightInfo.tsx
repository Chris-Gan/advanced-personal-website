/* eslint-disable camelcase */
import React, { useState } from 'react';
import * as yup from 'yup';
import { Box, Typography, TextField, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useFormik, FormikProvider, Field, FieldProps, FormikHelpers, Form } from 'formik';
import emailjs from '@emailjs/browser';
import { ContactFormInterface, contactFormInitialValues } from '../../utils/utils';

const RightInfo = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
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
                    resetForm();
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    setIsFormSubmitting(false);
                    console.log('FAILED...', err);
                }
            );
    };
    const formik = useFormik({
        initialValues: contactFormInitialValues,
        validateOnMount: true,
        validationSchema,
        onSubmit: handleOnSubmit,
    });
    console.log({ formik });
    return (
        <Box display="flex" alignItems="flex-end" flexDirection="column">
            <Typography variant="h6" sx={{ fontFamily: "'Poopins', sans-serif", color: '#333', fontWeight: 600, pt: 5, pb: 1, pr: 2 }}>
                leave me a message
            </Typography>
            <Box display="flex" flexDirection="column" sx={{ minWidth: '40vw' }}>
                <FormikProvider value={formik}>
                    <Form>
                        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
                            <Field name="from_name">
                                {({ field, meta }: FieldProps) => {
                                    const { error, touched } = meta;
                                    return (
                                        <TextField
                                            label="Name"
                                            fullWidth
                                            sx={{
                                                maxWidth: '19vw',
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
                                            sx={{ maxWidth: '19vw' }}
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
                                    />
                                );
                            }}
                        </Field>

                        <Button
                            type="submit"
                            variant="text"
                            disabled={!formik.isValid || isFormSubmitting}
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
