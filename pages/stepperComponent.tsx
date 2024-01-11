import { useState } from 'react';
import { Stepper, Button, Group, Card, Image, Text, Badge } from '@mantine/core';

export default function BasicStepper() {
    const [active, setActive] = useState(1);
    const [highestStepVisited, setHighestStepVisited] = useState(active);

    const handleStepChange = (nextStep: number) => {
        const isOutOfBounds = nextStep > 3 || nextStep < 0;

        if (isOutOfBounds) {
            return;
        }

        setActive(nextStep);
        setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
    };

    const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step
                    label="First step"
                    description="Create an account"
                    allowStepSelect={shouldAllowSelectStep(0)}
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Step 1 content: Create an account</div>
                </Stepper.Step>
                <Stepper.Step
                    label="Second step"
                    description="Verify email"
                    allowStepSelect={shouldAllowSelectStep(1)}
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Step 2 content: Verify email</div>
                </Stepper.Step>
                <Stepper.Step
                    label="Final step"
                    description="Get full access"
                    allowStepSelect={shouldAllowSelectStep(2)}
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Step 3 content: Get full access</div>
                </Stepper.Step>

                <Stepper.Completed>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Completed, click back button to get to previous step</div>
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <Button variant="default" onClick={() => handleStepChange(active - 1)}>
                    Back
                </Button>
                <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
            </Group>
        </Card>
    );
}