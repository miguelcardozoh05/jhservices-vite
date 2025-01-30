import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const PremiumSSHForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    planDays: '7',
    email: ''
  });

  const plans = [
    { days: '7', price: 10 },
    { days: '15', price: 18 },
    { days: '30', price: 30 }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create-premium-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Redirigir a MercadoPago
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error);
      }
    } catch {
      alert('Error al procesar la solicitud');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Crear Cuenta SSH Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre de Usuario</label>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              pattern="^[a-zA-Z0-9_]{3,16}$"
              required
              placeholder="usuario123"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="usuario@ejemplo.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Plan</label>
            <Select 
              value={formData.planDays}
              onValueChange={(value) => setFormData({ ...formData, planDays: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.days} value={plan.days}>
                    {plan.days} días - ${plan.price} USD
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Proceder al Pago
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PremiumSSHForm;