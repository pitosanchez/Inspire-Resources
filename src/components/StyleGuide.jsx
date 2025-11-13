/**
 * StyleGuide - Living Design System Documentation
 * A smoke test for all components and design tokens
 */

import Button from "./ui/Button";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/Card";
import Badge from "./ui/Badge";
import Input, { Label, FormField } from "./ui/Input";
import Alert, { InfoIcon, CheckIcon, WarningIcon, ErrorIcon } from "./ui/Alert";

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-serif font-semibold tracking-tight">
            INSPIRE Design System
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Living documentation and component library
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 space-y-24">
        {/* Typography */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">
              Typography
            </h2>
            <p className="text-muted-foreground">
              Responsive scale, readable measure, expressive hierarchy
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-6">
            <div>
              <h1 className="mb-2">Heading 1 - Display Serif</h1>
              <code className="text-sm text-muted-foreground">
                text-4xl md:text-5xl lg:text-6xl font-serif
              </code>
            </div>
            <div>
              <h2 className="mb-2">Heading 2 - Section Titles</h2>
              <code className="text-sm text-muted-foreground">
                text-3xl md:text-4xl lg:text-5xl font-serif
              </code>
            </div>
            <div>
              <h3 className="mb-2">Heading 3 - Subsections</h3>
              <code className="text-sm text-muted-foreground">
                text-2xl md:text-3xl lg:text-4xl font-serif
              </code>
            </div>
            <div>
              <h4 className="mb-2">Heading 4 - Card Titles</h4>
              <code className="text-sm text-muted-foreground">
                text-xl md:text-2xl lg:text-3xl font-serif
              </code>
            </div>
            <div>
              <p className="max-w-prose mb-2">
                Body text should be comfortable to read at any size. We use a
                fluid scale that adapts from 16px on mobile to 18px on desktop,
                with generous line-height (1.6) for optimal readability. Every
                word earns its place.
              </p>
              <code className="text-sm text-muted-foreground">
                text-base md:text-lg text-neutral-700
              </code>
            </div>
            <div>
              <p className="text-sm text-muted-foreground max-w-prose mb-2">
                Small text for secondary information, captions, and helper text.
                Still readable, never cramped.
              </p>
              <code className="text-sm text-muted-foreground">
                text-sm text-muted-foreground
              </code>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">
              Color Palette
            </h2>
            <p className="text-muted-foreground">
              Accessible, meaningful, and restrained
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand */}
            <div className="space-y-3">
              <h4 className="font-semibold">Brand - Trust & Care</h4>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className={`w-16 h-10 rounded-lg border border-neutral-200 bg-brand-${shade}`}
                      />
                      <code className="text-sm">brand-{shade}</code>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Accent */}
            <div className="space-y-3">
              <h4 className="font-semibold">Accent - Hope & Growth</h4>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className={`w-16 h-10 rounded-lg border border-neutral-200 bg-accent-${shade}`}
                      />
                      <code className="text-sm">accent-{shade}</code>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Neutral */}
            <div className="space-y-3">
              <h4 className="font-semibold">Neutral - Foundation</h4>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className={`w-16 h-10 rounded-lg border border-neutral-200 bg-neutral-${shade}`}
                      />
                      <code className="text-sm">neutral-{shade}</code>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">Buttons</h2>
            <p className="text-muted-foreground">
              Clear actions with proper states and accessibility
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-8">
            {/* Variants */}
            <div className="space-y-4">
              <h4 className="font-semibold">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h4 className="font-semibold">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* States */}
            <div className="space-y-4">
              <h4 className="font-semibold">States</h4>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button href="#styleguide">Link Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">Cards</h2>
            <p className="text-muted-foreground">
              Content containers with consistent spacing and elevation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Clean and minimal design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Consistent padding, radius, and shadow. Every element has
                  breathing room.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="brand">
              <CardHeader>
                <CardTitle>Brand Card</CardTitle>
                <CardDescription>Highlighted content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Brand-colored background for special emphasis or featured
                  content.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Extra prominence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Stronger shadow for cards that need to stand out from the
                  page.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card interactive>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover me to see the effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Interactive cards have hover states and can act as clickable
                elements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Badges */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">Badges</h2>
            <p className="text-muted-foreground">
              Compact labels for status and categories
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="brand">Brand</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="warm">Warm</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Sizes</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">
              Form Elements
            </h2>
            <p className="text-muted-foreground">
              Accessible, clear, with proper labeling and error states
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-6 max-w-2xl">
            <FormField label="Full Name" htmlFor="name" required>
              <Input id="name" placeholder="Enter your full name" />
            </FormField>

            <FormField
              label="Email Address"
              htmlFor="email"
              helperText="We'll never share your email"
            >
              <Input id="email" type="email" placeholder="you@example.com" />
            </FormField>

            <FormField
              label="Password"
              htmlFor="password-error"
              error
              helperText="Password must be at least 8 characters"
            >
              <Input
                id="password-error"
                type="password"
                error
                placeholder="••••••••"
              />
            </FormField>

            <FormField label="Disabled Input" htmlFor="disabled">
              <Input
                id="disabled"
                disabled
                placeholder="This field is disabled"
              />
            </FormField>

            <div className="flex gap-3 pt-4">
              <Button>Submit Form</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">Alerts</h2>
            <p className="text-muted-foreground">
              Important messages with visual hierarchy
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            <Alert variant="default" icon={<InfoIcon />} title="Information">
              This is a general information alert. Use it for neutral
              notifications.
            </Alert>

            <Alert variant="success" icon={<CheckIcon />} title="Success">
              Your changes have been saved successfully. You're all set!
            </Alert>

            <Alert variant="warning" icon={<WarningIcon />} title="Warning">
              Please review your information before proceeding. Some fields may
              need attention.
            </Alert>

            <Alert variant="destructive" icon={<ErrorIcon />} title="Error">
              There was a problem processing your request. Please try again
              later.
            </Alert>

            <Alert variant="brand" title="Brand Alert">
              Use brand-colored alerts for featured announcements or special
              information.
            </Alert>
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">
              Spacing Scale
            </h2>
            <p className="text-muted-foreground">
              8pt grid system for consistent rhythm
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-4">
            {[
              { name: "xs", value: "0.5rem (8px)" },
              { name: "sm", value: "0.75rem (12px)" },
              { name: "md", value: "1rem (16px)" },
              { name: "lg", value: "1.5rem (24px)" },
              { name: "xl", value: "2rem (32px)" },
              { name: "2xl", value: "3rem (48px)" },
              { name: "3xl", value: "4rem (64px)" },
            ].map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <div className={`bg-brand-500 h-6 p-${space.name}`} />
                <code className="text-sm font-mono">
                  p-{space.name} = {space.value}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">
              Accessibility
            </h2>
            <p className="text-muted-foreground">
              WCAG AA compliant, keyboard accessible, screen reader friendly
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Focus States</h4>
              <p className="text-sm text-muted-foreground mb-4">
                All interactive elements have visible focus rings for keyboard
                navigation.
              </p>
              <div className="flex gap-3">
                <Button>Tab to me</Button>
                <Input placeholder="And to me" className="max-w-xs" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Color Contrast</h4>
              <p className="text-sm text-muted-foreground">
                All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for
                large text).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Semantic HTML</h4>
              <p className="text-sm text-muted-foreground">
                Proper landmarks (header, main, nav, footer), ARIA labels, and
                semantic elements throughout.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 mt-24">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>
            INSPIRE Design System • Handcrafted with intention • Built with
            Tailwind CSS v3.x
          </p>
        </div>
      </footer>
    </div>
  );
}





