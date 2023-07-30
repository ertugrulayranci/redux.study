#state yönetimi:

Uygulama içerisindeki bileşenlerin sahip olduğu özellikler ve bilgiler.

#Prop drilling: Bileşenlerde yukarıdan aşağıya prop yöntemiyle veri gönderimi

#Context API: Uygulamalardaki statelerin yönetildiğimerkezi bir state yönetim aracıdır.

## Redux uygulamadaki bileşenlerin sahip olduğu gerekli statelerin merkezi bir store'da tutulmasını sağlar.

#Neden REDUX:

Kod tekrarını önler
Performansı artırır.
Bileşen içerisindeki karışıklığı azaltır.
State yönetimi daha kolay ve anlaşılır bir hal alır.

## Bilinmesi Gerekenler:

1. Store:Uygulamanın bütün bileşenleri tarafından erişilebilen ve değiştirilebilen merkezi sate

2. Action: Store'u güncellemek için reducer'a gönderdiğimiz haber
   --2 değere sahip bir objedir.
   --type:Eylemin görevi neyse onu tanımladığımız string
   --payload: reducer'a eylemi gönderirken yanında eylem ile alakalı veriyi gönderdiğimiz değer

3. Dispatch: Eylemlerin gerçekleştiğini reducer'a haber vermemizi sağlayan method

4. Reducer: Gönderilen aksiyonları type değerlerine göre analiz edip store'u günceller.

5. Subscribe: Redux uygulama durumununu merkezi bir depoda saklar. Bileşenlerin bu duruma erişmesi gerektiğinde useSelector kancası kullanılır.

# Kurulum:


- redux react-redux paketleri indirilir
- store'da kullanılacak reducer oluşturulur.
- store oluşturulur.
- store projeye'ye tanıtılır.

