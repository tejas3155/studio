import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users } from "lucide-react";

export default function CoordinatorDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-col items-center text-center">
          <Users className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-2xl font-bold">Coordinator Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">Welcome, Coordinator! Here are your tasks and team coordination activities.</p>
          <Button asChild className="mt-6">
            <Link href="/login">
              Log Out
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
