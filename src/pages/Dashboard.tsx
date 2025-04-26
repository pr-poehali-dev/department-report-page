
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Printer, Download, Users } from "lucide-react";

const Dashboard = () => {
  const handlePrintReport = () => {
    alert("Подготовка печатного отчета о сотрудниках...");
    // Здесь будет логика для печати отчета
  };

  const handleDownloadReport = () => {
    alert("Скачивание электронного отчета о сотрудниках...");
    // Здесь будет логика для скачивания отчета
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary-foreground">Панель администрации кафедры</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Отчеты о сотрудниках</CardTitle>
              <CardDescription>
                Создавайте и экспортируйте отчеты о сотрудниках учебного заведения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Printer className="h-5 w-5 text-primary" />
                      <CardTitle>Печатный отчет</CardTitle>
                    </div>
                    <CardDescription>
                      Формирование отчета для печати
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Подготовьте печатную версию отчета о сотрудниках кафедры для предоставления 
                      в бумажном виде.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handlePrintReport} className="w-full">
                      <Printer className="mr-2 h-4 w-4" />
                      Печать отчета
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-primary" />
                      <CardTitle>Электронный отчет</CardTitle>
                    </div>
                    <CardDescription>
                      Выгрузка в электронном формате
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Скачайте отчет о сотрудниках в электронном формате (Excel, PDF или CSV) 
                      для дальнейшей обработки.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleDownloadReport} className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать отчет
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Последние отчеты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Отчет о научных сотрудниках</p>
                    <p className="text-xs text-muted-foreground">Создан: 20.04.2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Отчет о преподавателях</p>
                    <p className="text-xs text-muted-foreground">Создан: 15.04.2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
