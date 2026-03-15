import {
  ActionIcon,
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
  RingProgress,
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
  IconBolt,
  IconChartHistogram,
  IconCircleCheck,
  IconSparkles,
} from "@tabler/icons-react";
import {
  analyticsHighlights,
  businessModels,
  differentiationRows,
  ecosystemLayers,
  footerLinks,
  futureIdeas,
  heroLinks,
  keyStats,
  mechanics,
  targetSegments,
  useCases,
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

type ProductPreviewProps = {
  title: string;
  subtitle: string;
  tone: "blue" | "pink" | "violet";
};

function ProductPreview({ title, subtitle, tone }: ProductPreviewProps) {
  return (
    <Paper className={`preview-card preview-${tone}`} shadow="glow" p="lg">
      <Group justify="space-between" mb="lg">
        <Stack gap={2}>
          <Text fw={800}>{title}</Text>
          <Text size="sm" c="dimmed">
            {subtitle}
          </Text>
        </Stack>
        <ActionIcon variant="white" color="dark" radius="xl" size="lg">
          <IconArrowUpRight size={18} />
        </ActionIcon>
      </Group>
      <Stack gap="sm">
        <Paper className="preview-panel" p="md">
          <Group justify="space-between">
            <Text size="sm" fw={700}>
              Активный сценарий
            </Text>
            <Badge color="indigo">live</Badge>
          </Group>
          <Text className="preview-stat">+120 XP</Text>
          <Text size="sm" c="dimmed">
            QR-маршрут и reward economy запущены в реальном времени
          </Text>
        </Paper>
        <SimpleGrid cols={2} spacing="sm">
          <Paper className="preview-mini" p="md">
            <Text size="xs" tt="uppercase" c="dimmed" fw={700}>
              engagement
            </Text>
            <Text fw={800} size="xl">
              74%
            </Text>
          </Paper>
          <Paper className="preview-mini" p="md">
            <Text size="xs" tt="uppercase" c="dimmed" fw={700}>
              rewards
            </Text>
            <Text fw={800} size="xl">
              61%
            </Text>
          </Paper>
        </SimpleGrid>
      </Stack>
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
            <Anchor href="#problem" c="dark" fw={600}>
              Проблема
            </Anchor>
            <Anchor href="#ecosystem" c="dark" fw={600}>
              Экосистема
            </Anchor>
            <Anchor href="#cases" c="dark" fw={600}>
              Кейсы
            </Anchor>
            <Anchor href="#future" c="dark" fw={600}>
              Roadmap
            </Anchor>
          </Group>

          <Button
            component="a"
            href="http://panel.stg.eventigo.io/"
            target="_blank"
            rel="noreferrer"
            rightSection={<IconArrowUpRight size={18} />}
          >
            Open demo
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

              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
                {heroLinks.map((link) => (
                  <Paper
                    key={link.title}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    p="lg"
                    className="link-card"
                  >
                    <Group justify="space-between" align="flex-start" mb="sm">
                      <Text fw={800}>{link.title}</Text>
                      <IconArrowUpRight size={18} />
                    </Group>
                    <Text size="sm" c="dimmed">
                      {link.description}
                    </Text>
                  </Paper>
                ))}
              </SimpleGrid>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Stack gap="md" className="hero-visual-wrap">
              <ProductPreview
                title="Levely Control"
                subtitle="Admin panel for live gamification"
                tone="violet"
              />
              <Group grow align="stretch">
                <ProductPreview
                  title="Eventigo"
                  subtitle="B2C public events"
                  tone="pink"
                />
                <ProductPreview
                  title="My HR"
                  subtitle="White-label B2B"
                  tone="blue"
                />
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" className="section" id="problem">
        <SectionHeading
          eyebrow="Проблема"
          title="Вовлеченность проседает, а организаторы видят это слишком поздно"
          description="Сегодня механики разрознены, внимание участников быстро теряется, а команда не получает live-сигналов о том, что реально работает."
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="xl">
          {keyStats.map((stat) => (
            <Paper key={stat.title} p="xl" className="surface-card">
              <Text className="metric-value">{stat.value}</Text>
              <Text fw={800} mt="sm" size="lg">
                {stat.title}
              </Text>
              <Text c="dimmed" mt="sm">
                {stat.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>

        <Grid gutter="lg" mt="xl">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper p="xl" className="surface-card highlight-card">
              <Group gap="sm" mb="md">
                <ThemeIcon size="lg" radius="xl" color="indigo">
                  <IconBolt size={18} />
                </ThemeIcon>
                <Text fw={800} size="lg">
                  Почему это болит прямо сейчас
                </Text>
              </Group>
              <Stack gap="md">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="indigo" radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>
                    Участники выпадают из сценария, если нет понятного прогресса,
                    награды и быстрых точек действия.
                  </Text>
                </Group>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="pink" radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>
                    Организаторы не могут оперативно менять механику, если
                    аналитика появляется только постфактум.
                  </Text>
                </Group>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="grape" radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>
                    Бизнесу нужен один гибкий стек, который работает и для
                    внутренних порталов, и для публичных событий.
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper p="xl" className="trend-card">
              <Text fw={800} size="lg">
                Growth signal
              </Text>
              <Text c="dimmed" mt="xs">
                Рынок геймификации растет быстро, а значит выигрывают платформы,
                которые закрывают сразу несколько сегментов.
              </Text>
              <Stack gap="md" mt="lg">
                <Box>
                  <Group justify="space-between" mb={6}>
                    <Text size="sm" fw={700}>
                      2026
                    </Text>
                    <Text size="sm" fw={700}>
                      $36.5B
                    </Text>
                  </Group>
                  <Box className="trend-bar trend-bar-sm" />
                </Box>
                <Box>
                  <Group justify="space-between" mb={6}>
                    <Text size="sm" fw={700}>
                      2030
                    </Text>
                    <Text size="sm" fw={700}>
                      $92.5B
                    </Text>
                  </Group>
                  <Box className="trend-bar trend-bar-lg" />
                </Box>
                <Badge size="lg" color="coral">
                  CAGR 26-28%
                </Badge>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" className="section">
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

      <Container size="xl" className="section" id="cases">
        <SectionHeading
          eyebrow="Кейсы и демо"
          title="Три входа в продукт: B2B white-label, B2C приложение и core-панель"
          description="Эти ссылки можно показывать на демо или вставлять прямо в презентацию как подтверждение, что у идеи уже есть форма."
        />

        <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="lg" mt="xl">
          {useCases.map((useCase) => (
            <Paper key={useCase.title} p="xl" className="surface-card case-card">
              <Badge
                size="lg"
                color={
                  useCase.tone === "blue"
                    ? "indigo"
                    : useCase.tone === "pink"
                      ? "pink"
                      : "grape"
                }
              >
                {useCase.subtitle}
              </Badge>
              <Title order={3} mt="lg" mb="xs">
                {useCase.title}
              </Title>
              <Text c="dimmed">{useCase.description}</Text>

              <Paper className={`case-preview case-preview-${useCase.tone}`} p="lg" mt="lg">
                <Group justify="space-between" mb="md">
                  <Text fw={800}>Scenario snapshot</Text>
                  <Badge color="dark">demo</Badge>
                </Group>
                <SimpleGrid cols={2} spacing="sm">
                  <Paper p="sm" className="case-preview-stat">
                    <Text size="xs" tt="uppercase" c="dimmed">
                      users
                    </Text>
                    <Text fw={800} size="xl">
                      2.4k
                    </Text>
                  </Paper>
                  <Paper p="sm" className="case-preview-stat">
                    <Text size="xs" tt="uppercase" c="dimmed">
                      actions
                    </Text>
                    <Text fw={800} size="xl">
                      8.1k
                    </Text>
                  </Paper>
                </SimpleGrid>
              </Paper>

              <Stack gap="sm" mt="lg">
                {useCase.bullets.map((bullet) => (
                  <Group key={bullet} wrap="nowrap" align="flex-start">
                    <ThemeIcon size="sm" radius="xl" color="indigo" variant="light">
                      <IconCircleCheck size={12} />
                    </ThemeIcon>
                    <Text>{bullet}</Text>
                  </Group>
                ))}
              </Stack>

              <Button
                component="a"
                href={useCase.href}
                target="_blank"
                rel="noreferrer"
                variant="white"
                mt="xl"
                rightSection={<IconArrowUpRight size={18} />}
              >
                Открыть демо
              </Button>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <Container size="xl" className="section">
        <SectionHeading
          eyebrow="Аналитика"
          title="Live-статистика делает Levely управляемым продуктом, а не просто набором активностей"
          description="Для организаторов важно видеть не только факт участия, но и глубину сценария, reward funnel и динамику по сегментам уже во время ивента."
        />

        <Grid gutter="lg" mt="xl">
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Paper p="xl" className="surface-card analytics-board">
              <Group justify="space-between" align="flex-start" mb="xl">
                <Stack gap={4}>
                  <Text fw={800} size="lg">
                    Analytics board
                  </Text>
                  <Text c="dimmed">
                    Полная статистика по участникам, событиям и активностям.
                  </Text>
                </Stack>
                <ThemeIcon size={48} radius="xl" color="indigo">
                  <IconChartHistogram size={24} />
                </ThemeIcon>
              </Group>

              <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
                {analyticsHighlights.map((item) => (
                  <Paper key={item.label} p="md" className="analytics-metric">
                    <Text size="xs" tt="uppercase" c="dimmed">
                      {item.label}
                    </Text>
                    <Text fw={800} size="xl" mt={6}>
                      {item.value}
                    </Text>
                  </Paper>
                ))}
              </SimpleGrid>

              <Grid mt="lg">
                <Grid.Col span={{ base: 12, sm: 7 }}>
                  <Paper p="lg" className="analytics-graph">
                    <Text fw={800} mb="md">
                      Completion pulse
                    </Text>
                    <Box className="line-chart">
                      <span />
                      <span />
                      <span />
                      <span />
                    </Box>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 5 }}>
                  <Paper p="lg" className="analytics-graph">
                    <Text fw={800} mb="md">
                      Reward claim
                    </Text>
                    <RingProgress
                      size={180}
                      thickness={20}
                      sections={[
                        { value: 61, color: "#5a62ff" },
                        { value: 21, color: "#ff5db1" },
                        { value: 18, color: "#d7dbff" },
                      ]}
                      label={
                        <Text fw={800} ta="center" size="xl">
                          61%
                        </Text>
                      }
                    />
                  </Paper>
                </Grid.Col>
              </Grid>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Paper p="xl" className="surface-card">
              <Title order={3}>Что это дает бизнесу</Title>
              <Stack gap="md" mt="lg">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="indigo" variant="light">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>Команда видит провалы и сильные точки сценария без ожидания финального отчета.</Text>
                </Group>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="pink" variant="light">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>Администратор может менять механику, награды и push-точки прямо в ходе события.</Text>
                </Group>
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon radius="xl" color="grape" variant="light">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                  <Text>Это превращает вовлеченность из красивой идеи в измеримый KPI.</Text>
                </Group>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" className="section" id="future">
        <Paper p="xl" className="final-cta">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Stack gap="lg">
                <Badge size="lg" color="pink">
                  Финал и масштабирование
                </Badge>
                <Title order={2} className="section-title">
                  Следующий шаг: AI, новые механики и еще более бесшовные интеграции
                </Title>
                <Text size="lg" c="dimmed">
                  Levely уже выглядит как платформа, а не просто концепт. Следующая
                  точка роста — AI-генерация сценариев, событий и заданий, чтобы
                  запуск геймификации стал еще быстрее и масштабируемее.
                </Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                  {futureIdeas.map((idea) => (
                    <Paper key={idea} p="md" className="future-item">
                      <Group wrap="nowrap" align="flex-start">
                        <ThemeIcon radius="xl" color="pink" variant="light">
                          <IconCircleCheck size={16} />
                        </ThemeIcon>
                        <Text>{idea}</Text>
                      </Group>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Paper p="xl" className="closing-card">
                <Text className="closing-kicker">Levely</Text>
                <Title order={3} mt="sm" mb="md">
                  Универсальная платформа геймификации для B2B и B2C
                </Title>
                <Text c="dimmed">
                  Показывает ценность за минуту, выглядит убедительно на сцене и
                  уже имеет демо-точки для презентации.
                </Text>
                <Stack gap="sm" mt="xl">
                  <Button
                    component="a"
                    href="http://panel.stg.eventigo.io/"
                    target="_blank"
                    rel="noreferrer"
                    rightSection={<IconArrowUpRight size={18} />}
                  >
                    Открыть Levely Admin
                  </Button>
                  <Button
                    component="a"
                    href="https://stg.ilovehr.ink/"
                    target="_blank"
                    rel="noreferrer"
                    variant="white"
                    rightSection={<IconArrowUpRight size={18} />}
                  >
                    Посмотреть My HR PoC
                  </Button>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
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
