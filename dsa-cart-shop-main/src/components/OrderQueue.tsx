import { CheckCircle2, Clock, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Order } from '@/lib/dsa/Queue';
import { ScrollArea } from '@/components/ui/scroll-area';

interface OrderQueueProps {
  orders: Order[];
}

export function OrderQueue({ orders }: OrderQueueProps) {
  if (orders.length === 0) return null;

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'processing':
        return <Package className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'secondary';
      case 'processing':
        return 'default';
      case 'completed':
        return 'default';
    }
  };

  return (
    <Card className="mt-8 animate-slide-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          Order Queue (DSA: Queue Implementation)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-3">
            {orders.map((order, index) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-lg border p-3 animate-fade-in"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.items.length} items • ₹{order.total.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
                <Badge variant={getStatusColor(order.status)} className="gap-1">
                  {getStatusIcon(order.status)}
                  {order.status}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
