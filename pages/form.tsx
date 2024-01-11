import { Button, TextInput, Checkbox, Group, LoadingOverlay, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { useEffect } from "react";

type FormValues = {
    userName: string;
    email: string;
    isBestEmployee: boolean;
};

export default function FormComponent() {
    const [visible, { toggle }] = useDisclosure(false)
    const form = useForm({
        initialValues: {
            userName: '',
            email: '',
            isBestEmployee: false,
        },
        validate: {
            userName: (value) => (value.length < 5 ? 'Full name must have at least 4 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    })

    const formSubmit = (values: FormValues | {}) => console.log(values)

    return (
        <Box pos={'relative'}>
            <form onSubmit={form.onSubmit((values) => formSubmit(values))}>
                <Box pos={'relative'}>
                    <LoadingOverlay visible={visible} overlayBlur={2} />
                    <TextInput
                        withAsterisk
                        label="Full name"
                        placeholder="John Doe..."
                        {...form.getInputProps('userName')}
                    />
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <Checkbox
                        mt="md"
                        label="Are you the best employee?"
                        {...form.getInputProps('isBestEmployee', { type: 'checkbox' })}
                    />
                </Box>
                <Group position="center" mt="md">
                    <Button fullWidth={true} type="submit" onClick={toggle}>{visible ? 'Cancel' : 'Submit'}</Button>
                </Group>
            </form>
        </Box>
    );
}
