import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Checkbox } from "@/components/forms/Checkbox";
import { Switch } from "@/components/forms/Switch";
import { Alert } from "@/components/notifications/Alert";
import { Navbar } from "@/components/navigation/Navbar";

export default function UIPreviewPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Test Navbar */}
      <div className="h-20 mb-8 relative z-50">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 space-y-16 mt-12">
        <div>
          <h1 className="text-4xl font-bold text-heading mb-4">Sharda Academy UI System</h1>
          <p className="text-paragraph">This page previews all the reusable components built in Batch 2 and 3.</p>
        </div>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-heading border-b border-border pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-heading border-b border-border pb-2">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-heading border-b border-border pb-2">Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert type="info" title="Information" description="Please note that this is an informational alert." />
            <Alert type="success" title="Success" description="Your changes have been saved successfully." />
            <Alert type="warning" title="Warning" description="Your session is about to expire." />
            <Alert type="error" title="Error" description="Failed to process your request." />
          </div>
        </section>

        {/* Forms */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-heading border-b border-border pb-2">Form Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Input label="Full Name" placeholder="John Doe" required />
            <Input label="Email Address" type="email" placeholder="john@example.com" error="Invalid email format" />
            <Select 
              label="Course Selection" 
              placeholder="Select a course..."
              options={[
                { label: "JEE Main", value: "jee" },
                { label: "NEET", value: "neet" },
              ]} 
            />
            <div className="space-y-4">
              <Checkbox label="I agree to the terms and conditions" id="terms" />
              <Switch label="Enable Notifications" id="notif" />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-heading border-b border-border pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader><CardTitle>Default Card</CardTitle></CardHeader>
              <CardContent>Solid background with subtle shadow.</CardContent>
            </Card>
            <Card variant="outline">
              <CardHeader><CardTitle>Outline Card</CardTitle></CardHeader>
              <CardContent>Transparent background with border.</CardContent>
            </Card>
            <Card variant="elevated">
              <CardHeader><CardTitle>Elevated Card</CardTitle></CardHeader>
              <CardContent>Higher shadow for floating effect.</CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
