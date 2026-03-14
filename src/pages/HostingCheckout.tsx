import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft, Building2, CreditCard, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PlanInfo {
  name: string;
  price: number;
  billingPeriod: string;
  features: string[];
}

const HostingCheckout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    note: '',
  });

  const planData: PlanInfo | null = (() => {
    const plan = searchParams.get('plan');
    const period = searchParams.get('period') || 'yearly';
    
    const plans = {
      'max1': {
        name: 'Wordpress Max 1',
        price: { monthly: 150000, quarterly: 450000, yearly: 1500000 },
        features: ['5 GB Storage', 'Unlimited Bandwidth', '5 Websites', '5 Email Accounts', 'SLA 99.9%', 'Hằng ngày'],
      },
      'max2': {
        name: 'Wordpress Max 2',
        price: { monthly: 200000, quarterly: 600000, yearly: 2000000 },
        features: ['10 GB Storage', 'Unlimited Bandwidth', '10 Websites', '10 Email Accounts', 'SLA 99.9%', 'Hằng ngày'],
      },
      'max3': {
        name: 'Wordpress Max 3',
        price: { monthly: 500000, quarterly: 1500000, yearly: 5000000 },
        features: ['50 GB Storage', 'Unlimited Bandwidth', '200 Websites', '100 Email Accounts', 'SLA 99.9%', 'Hằng ngày'],
      },
    };

    if (!plan || !(plan in plans)) return null;

    const selectedPlan = plans[plan as keyof typeof plans];
    const billingLabels = {
      monthly: '/ tháng',
      quarterly: '/ 3 tháng',
      yearly: '/ năm',
    };

    return {
      name: selectedPlan.name,
      price: selectedPlan.price[period as keyof typeof selectedPlan.price],
      billingPeriod: billingLabels[period as keyof typeof billingLabels],
      features: selectedPlan.features,
    };
  })();

  useEffect(() => {
    if (!planData) {
      navigate('/services/hosting-pricing');
    }
  }, [planData, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Đơn hàng đã được gửi!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        note: '',
      });
    }, 2000);
  };

  if (!planData) return null;

  return (
    <PageLayout>
      <SEO
        title="Thông tin đơn hàng - Hosting Wordpress Max Speed"
        description="Hoàn tất thông tin đơn hàng hosting của bạn"
      />
      
      <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/services/hosting-pricing')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại
          </Button>

          <h1 className="text-3xl font-bold text-foreground mb-8">
            Thông tin đơn hàng
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin khách hàng</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Họ và tên <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Nguyễn Văn A"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Số điện thoại <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0912345678"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Công ty / Tổ chức</Label>
                      <Input
                        id="company"
                        placeholder="Tên công ty"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        placeholder="Địa chỉ của bạn"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="note">Ghi chú</Label>
                      <Textarea
                        id="note"
                        placeholder="Thông tin bổ sung (nếu có)"
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Đang xử lý...' : 'Thanh toán'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Tóm tắt đơn hàng</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{planData.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Gói hosting {planData.billingPeriod}
                    </p>

                    <ul className="space-y-3">
                      {planData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tạm tính:</span>
                      <span>{formatPrice(planData.price)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT (10%):</span>
                      <span>{formatPrice(planData.price * 0.1)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Tổng cộng:</span>
                      <span className="text-primary">
                        {formatPrice(planData.price * 1.1)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p className="text-muted-foreground">
                      Sau khi thanh toán, bạn sẽ nhận được email xác nhận và thông tin
                      kích hoạt dịch vụ trong vòng 24 giờ.
                    </p>
                  </div>

                  {/* Payment QR Code Section */}
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold text-center">Thông tin thanh toán</h3>
                    
                    {/* QR Code */}
                    <div className="flex justify-center p-4 bg-white rounded-lg">
                      <img
                        src={`https://img.vietqr.io/image/970415-105800030300-compact2.png?amount=${Math.round(planData.price * 1.1)}&addInfo=${encodeURIComponent('thanh toán DH hosting giá rẻ 1234')}&accountName=${encodeURIComponent('Nguyễn Tấn Thành')}`}
                        alt="QR Code thanh toán"
                        className="w-64 h-64 object-contain"
                      />
                    </div>

                    {/* Bank Information */}
                    <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">Ngân hàng</p>
                          <p className="font-semibold">Vietinbank</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">Số tài khoản</p>
                          <p className="font-semibold">105800030300</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">Chủ tài khoản</p>
                          <p className="font-semibold">Nguyễn Tấn Thành</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">Nội dung</p>
                          <p className="font-semibold break-words">thanh toán DH hosting giá rẻ 1234</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      Vui lòng chuyển khoản đúng nội dung để được xử lý tự động
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HostingCheckout;
