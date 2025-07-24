
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Skeleton } from '@/components/ui/skeleton';

const mockTasks: { [key: string]: string[] } = {
  '2024-08-15': ['Quarterly Review with Sales Team', 'Finalize budget proposal'],
  '2024-08-22': ['Onboarding session for new hires'],
  '2024-09-01': ['Company-wide Town Hall', 'Submit monthly reports'],
};

export function CalendarWithTasks() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [tasks, setTasks] = React.useState<string[] | null>(null);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (date) {
      const dateString = date.toISOString().split('T')[0];
      setTasks(mockTasks[dateString] || []);
    }
  }, [date]);

  if (!isClient) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardContent className="p-0">
                    <Skeleton className="h-[290px] w-full" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="h-6 w-32" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardContent className="p-0">
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-0"
                    classNames={{
                        root: "w-full",
                        months: "w-full",
                        month: "w-full",
                        table: "w-full",
                        head_row: "w-full flex justify-around",
                        row: "w-full flex justify-around mt-2",
                    }}
                    disabled={(date) => date < new Date("1900-01-01")}
                    initialFocus
                />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                    Tasks for {date ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : '...'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {tasks === null || !date ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ) : tasks.length > 0 ? (
                <ul className="space-y-2 list-disc list-inside">
                    {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                    ))}
                </ul>
                ) : (
                <p className="text-muted-foreground">No tasks scheduled for this day.</p>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
