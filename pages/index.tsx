import { Button, ActionIcon, useMantineColorScheme, Container, Flex, Badge, ColorScheme, Pagination } from "@mantine/core";
import { useIdle, useLocalStorage } from "@mantine/hooks";
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import BasicStepper from "./stepperComponent";
import FormComponent from "./form";

export default function IndexPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [themeColor, setThemeColor] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light'
  })

  const idle = useIdle(2700)

  const dark = colorScheme === 'dark';

  const changeBadge = () => {
    return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
  }

  const handleToggle = () => toggleColorScheme();

  const toggleColorTheme = () => setThemeColor(current => current === 'dark' ? 'light' : 'dark');

  return (
    <Container>
      <Flex mih={50} justify={'center'} align={"center"} direction={"column"} gap={'lg'}>
        <Button size="xl">Welcome to Mantine!</Button>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={handleToggle}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>

        {changeBadge()}

        <ActionIcon onClick={toggleColorTheme}>
          {themeColor === 'dark' ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>

        <BasicStepper />

        <FormComponent />

        <Pagination total={10} />
      </Flex>
    </Container>
  );
}
