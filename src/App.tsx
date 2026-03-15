import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCircleCheck,
  IconSparkles,
} from "@tabler/icons-react";
import {
  businessModels,
  differentiationRows,
  ecosystemLayers,
  footerLinks,
  heroLinks,
  mechanics,
  targetSegments,
} from "./content";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Stack gap="md" maw={680}>
      <Badge
        size="lg"
        className="section-badge"
        leftSection={<IconSparkles size={14} stroke={2} />}
      >
        {eyebrow}
      </Badge>
      <Title order={2} className="section-title">
        {title}
      </Title>
      <Text size="lg" c="dimmed" className="section-description">
        {description}
      </Text>
    </Stack>
  );
}

type HeroLinkCardProps = {
  link: (typeof heroLinks)[number];
  featured?: boolean;
};

function HeroLinkCard({ link, featured = false }: HeroLinkCardProps) {
  return (
    <Paper
      component="a"
      href={link.href}
      target="_blank"
      rel="noreferrer"
      p={featured ? "xl" : "lg"}
      className={`hero-demo-card hero-demo-card-${link.accent}${featured ? " hero-demo-card-featured" : ""}`}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap" gap="md">
        <Stack gap="sm" flex={1}>
          <Badge
            size="md"
            color={link.accent === "blue" ? "blue" : link.accent}
            className="hero-demo-badge"
          >
            {link.badge}
          </Badge>
          <Text className={featured ? "hero-demo-title hero-demo-title-lg" : "hero-demo-title"}>
            {link.title}
          </Text>
          <Text c="dimmed" className="hero-demo-text">
            {link.description}
          </Text>
        </Stack>

        <ThemeIcon radius="xl" size={featured ? 54 : 48} className="hero-demo-icon">
          <IconArrowUpRight size={featured ? 24 : 20} />
        </ThemeIcon>
      </Group>

      <Group justify="space-between" align="center" mt={featured ? "xl" : "lg"}>
        <Text fw={800} className="hero-demo-cta">
          {link.cta}
        </Text>
        <Text size="sm" c="dimmed">
          Открыть
        </Text>
      </Group>
    </Paper>
  );
}

function App() {
  return (
    <Box className="page-shell">
      <Container size="xl" className="topbar">
        <Flex justify="space-between" align="center" py="md" gap="md">
          <Group gap="sm">
            <Box className="brand-mark">L</Box>
            <Stack gap={0}>
              <Text fw={800}>Levely</Text>
              <Text size="xs" c="dimmed">
                Gamification platform
              </Text>
            </Stack>
          </Group>

          <Group gap="xs" visibleFrom="sm">
            <Anchor href="#market" c="dark" fw={600}>
              Рынок
            </Anchor>
            <Anchor href="#ecosystem" c="dark" fw={600}>
              Экосистема
            </Anchor>
          </Group>

          <Button
            component="a"
            href="http://panel.stg.eventigo.io/"
            target="_blank"
            rel="noreferrer"
            rightSection={<IconArrowUpRight size={18} />}
          >
            Открыть демо
          </Button>
        </Flex>
      </Container>

      <Container size="xl" className="hero">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Stack gap="xl">
              <Group gap="sm">
                <Badge size="lg" color="indigo">
                  Полуостров Эйнштейна
                </Badge>
                <Badge size="lg" color="pink">
                  Hackathon pitch-ready
                </Badge>
              </Group>

              <Stack gap="lg">
                <Title order={1} className="hero-title">
                  Levely.
                  <br />
                  Больше, чем платформа.
                  <br />
                  Глубже, чем игра.
                </Title>
                <Text size="xl" c="dimmed" maw={700} className="hero-text">
                  Levely превращает события, обучение и комьюнити-активности в
                  систему прогресса, наград и measurable engagement. Один
                  движок для B2B интеграций, white-label продуктов и B2C
                  сценариев через Eventigo.
                </Text>
              </Stack>

              <Group gap="md">
                <Button
                  size="lg"
                  component="a"
                  href="#ecosystem"
                  rightSection={<IconArrowRight size={18} />}
                >
                  Посмотреть платформу
                </Button>
                <Button
                  size="lg"
                  variant="white"
                  component="a"
                  href="https://eventigo.io/"
                  target="_blank"
                  rel="noreferrer"
                  rightSection={<IconArrowUpRight size={18} />}
                >
                  Eventigo
                </Button>
              </Group>

              <Paper p="lg" className="hero-proof-strip">
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
                  <Stack gap={2}>
                    <Text className="hero-proof-value">3</Text>
                    <Text fw={700}>проекта</Text>
                    <Text size="sm" c="dimmed">
                      PoC для B2B, и работающее решение Eventigo
                    </Text>
                  </Stack>
                  <Stack gap={2}>
                    <Text className="hero-proof-value">B2B + B2C</Text>
                    <Text fw={700}>одна платформа</Text>
                    <Text size="sm" c="dimmed">
                      От white-label интеграций до публичных событий
                    </Text>
                  </Stack>
                  <Stack gap={2}>
                    <Text className="hero-proof-value">Real-time</Text>
                    <Text fw={700}>аналитика и сценарии</Text>
                    <Text size="sm" c="dimmed">
                      Вовлеченность, награды и активность в моменте
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Paper>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Paper p="xl" className="hero-demo-board">
              <Stack gap="lg">
                <Group justify="space-between" align="flex-start" gap="md">
                  <Stack gap="sm" maw={360}>
                    <Badge size="lg" color="grape">
                      Демо-ссылки     
                    </Badge>
                    <Title order={3} className="hero-demo-board-title">
                      Результат нашей работы на хакатоне
                    </Title>
                    <Text c="dimmed">
                      Админ-панель, B2C приложение и white-label
                    </Text>
                  </Stack>

                  <ThemeIcon radius="xl" size={56} className="hero-demo-board-icon">
                    <IconArrowUpRight size={24} />
                  </ThemeIcon>
                </Group>

                <HeroLinkCard link={heroLinks[0]} featured />

                <Stack gap="md">
                  {heroLinks.slice(1).map((link) => (
                    <HeroLinkCard key={link.title} link={link} />
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" className="section" id="market">
        <SectionHeading
          eyebrow="Рынок"
          title="Levely играет сразу в двух направлениях роста"
          description="Мы не ограничиваемся только корпоративными кейсами: платформа закрывает B2B white-label интеграции и одновременно открывает B2C витрину через Eventigo."
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {targetSegments.map((segment) => (
            <Paper key={segment.title} p="xl" className="surface-card">
              <Group justify="space-between" mb="md">
                <Title order={3}>{segment.title}</Title>
                <Badge size="lg" color={segment.title === "B2B" ? "indigo" : "pink"}>
                  focus
                </Badge>
              </Group>
              <Text c="dimmed">{segment.description}</Text>
              <Stack gap="sm" mt="lg">
                {segment.bullets.map((bullet) => (
                  <Group key={bullet} wrap="nowrap" align="flex-start">
                    <ThemeIcon radius="xl" size="sm" color="indigo" variant="light">
                      <IconCircleCheck size={12} />
                    </ThemeIcon>
                    <Text>{bullet}</Text>
                  </Group>
                ))}
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <Container size="xl" className="section" id="ecosystem">
        <SectionHeading
          eyebrow="Экосистема Levely"
          title="Не один продукт, а целый слой геймификации для событий и платформ"
          description="Levely объединяет сценарии, награды, аналитику и интеграции в одну архитектуру, которую легко показывать и как startup story, и как понятный бизнес-инструмент."
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="xl">
          {ecosystemLayers.map((layer) => (
            <Paper key={layer.title} p="xl" className="surface-card layer-card">
              <ThemeIcon radius="xl" size={52} className="layer-icon">
                {layer.icon}
              </ThemeIcon>
              <Title order={3} mt="lg" mb="sm">
                {layer.title}
              </Title>
              <Text c="dimmed">{layer.description}</Text>
              <Divider my="lg" />
              <Stack gap="sm">
                {layer.bullets.map((bullet) => (
                  <Text key={bullet} className="feature-bullet">
                    {bullet}
                  </Text>
                ))}
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <Container size="xl" className="section">
        <SectionHeading
          eyebrow="Механики"
          title="Гибкость от простого QR до полноценной reward economy"
          description="Для pitch это важно: продукт выглядит не как узкий инструмент, а как конструктор, который можно адаптировать под разный бизнес и аудиторию."
        />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mt="xl">
          {mechanics.map((mechanic) => (
            <Paper key={mechanic.title} p="xl" className="surface-card mechanic-card">
              <ThemeIcon radius="xl" size={50} className="mechanic-icon">
                {mechanic.icon}
              </ThemeIcon>
              <Text fw={800} size="lg" mt="lg" mb="xs">
                {mechanic.title}
              </Text>
              <Text c="dimmed">{mechanic.description}</Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <Container size="xl" className="section">
        <SectionHeading
          eyebrow="Монетизация"
          title="Три модели роста вместо одной ставки на удачу"
          description="Levely можно продавать как SaaS, как enterprise-интеграцию и как B2C канал с комиссиями и готовыми сценариями."
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="xl">
          {businessModels.map((model) => (
            <Paper key={model.title} p="xl" className="surface-card model-card">
              <Text fw={800} size="lg">
                {model.title}
              </Text>
              <Text c="dimmed" mt="sm">
                {model.description}
              </Text>
              <Badge mt="lg" size="lg" color="indigo">
                {model.note}
              </Badge>
            </Paper>
          ))}
        </SimpleGrid>

        <Paper p="xl" className="surface-card comparison-card" mt="lg">
          <Group justify="space-between" mb="lg">
            <Stack gap={2}>
              <Title order={3}>Почему это сильнее типичных B2B-only конкурентов</Title>
              <Text c="dimmed">
                В презентации это можно подавать как отличие от решений вроде
                Mambo и Gametize.
              </Text>
            </Stack>
            <Badge size="lg" color="pink">
              Levely vs market
            </Badge>
          </Group>
          <Table striped highlightOnHover className="comparison-table">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Capability</Table.Th>
                <Table.Th>Levely</Table.Th>
                <Table.Th>Типичный рынок</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {differentiationRows.map((row) => (
                <Table.Tr key={row.capability}>
                  <Table.Td>{row.capability}</Table.Td>
                  <Table.Td>{row.levely}</Table.Td>
                  <Table.Td>{row.market}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Container>

      <Container size="xl" py={56}>
        <Paper p="xl" className="footer-card">
          <Group justify="space-between" align="flex-start" gap="xl">
            <Stack gap={6}>
              <Group gap="sm">
                <Box className="brand-mark">L</Box>
                <Text fw={800}>Levely</Text>
              </Group>
              <Text c="dimmed" maw={520}>
                Больше, чем платформа. Глубже, чем игра. Landing page для
                презентации hackathon-проекта о геймификации событий, команд и
                сообществ.
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" maw={560} flex={1}>
              {footerLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Paper
                    key={link.label}
                    component="a"
                    href={link.href}
                    p="md"
                    className="footer-link"
                  >
                    <Group justify="space-between">
                      <Text fw={700}>{link.label}</Text>
                      <Icon size={18} />
                    </Group>
                  </Paper>
                );
              })}
            </SimpleGrid>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
