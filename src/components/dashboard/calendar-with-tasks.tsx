
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

const mockTasks: { [key: string]: string[] } = {
  '2024-08-15': ['Quarterly Review with Sales Team', 'Finalize budget proposal'],
  '2024-08-22': ['Onboarding session for new hires'],
  '2024-09-01': ['Company-wide Town Hall', 'Submit monthly reports'],
};

export function CalendarWithTasks() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [tasks, setTasks] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (date) {
      const dateString = date.toISOString().split('T')[0];
      setTasks(mockTasks[dateString] || []);
    }
  }, [date]);

  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {tasks.length > 0 ? (
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
