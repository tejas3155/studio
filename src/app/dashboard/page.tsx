import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Welcome to your Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">This is a placeholder for your main application content.</p>
          <Button asChild className="mt-6">
            <Link href="/">
              Go back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
