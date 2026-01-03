import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const HostingPricing = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('yearly');

  const plans = [
    {
      id: 'max1',
      name: 'Wordpress Max 1',
      price: {
        monthly: 150000,
        quarterly: 450000,
        yearly: 1500000,
      },
      features: [
        '5 GB Storage',
        'Unlimited Bandwidth',
        '5 Websites',
        '5 Email Accounts',
        'SLA 99.9%',
        'Hằng ngày',
      ],
    },
    {
      id: 'max2',
      name: 'Wordpress Max 2',
      price: {
        monthly: 200000,
        quarterly: 600000,
        yearly: 2000000,
      },
      features: [
        '10 GB Storage',
        'Unlimited Bandwidth',
        '10 Websites',
        '10 Email Accounts',
        'SLA 99.9%',
        'Hằng ngày',
      ],
      popular: true,
    },
    {
      id: 'max3',
      name: 'Wordpress Max 3',
      price: {
        monthly: 500000,
        quarterly: 1500000,
        yearly: 5000000,
      },
      features: [
        '50 GB Storage',
        'Unlimited Bandwidth',
        '200 Websites',
        '100 Email Accounts',
        'SLA 99.9%',
        'Hằng ngày',
      ],
    },
  ];

  const handleSelectPlan = (planId: string) => {
    navigate(`/services/hosting-checkout?plan=${planId}&period=${billingPeriod}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const getBillingLabel = () => {
    switch (billingPeriod) {
      case 'monthly':
        return '/ tháng';
      case 'quarterly':
        return '/ 3 tháng';
      case 'yearly':
        return '/ năm';
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Bảng Giá Hosting - Wordpress Max Speed"
        description="Chọn gói hosting phù hợp với nhu cầu của bạn. Từ 5GB đến 50GB storage với băng thông unlimited."
      />
      
      <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Wordpress Max Speed
            </h1>
            <p className="text-lg text-muted-foreground">
              Chọn gói hosting phù hợp với nhu cầu của bạn
            </p>
          </div>

          {/* Billing Period Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs
              value={billingPeriod}
              onValueChange={(value) => setBillingPeriod(value as typeof billingPeriod)}
              className="w-full max-w-md"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="monthly">Tháng</TabsTrigger>
                <TabsTrigger value="quarterly">3 tháng</TabsTrigger>
                <TabsTrigger value="yearly">
                  Năm
                  <span className="ml-1 text-xs text-primary">(-20%)</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-lg ${
                  plan.popular
                    ? 'border-primary ring-2 ring-primary ring-opacity-50'
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {formatPrice(plan.price[billingPeriod])}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {getBillingLabel()}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  Chọn gói
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HostingPricing;
