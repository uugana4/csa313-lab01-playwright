# Лаб 1: Playwright UI автомат тест (F.CSA313)

[saucedemo.com](https://www.saucedemo.com) демо дэлгүүрийг Playwright (TypeScript) ашиглан автоматаар тестлэв.

## Юу хийсэн
- `npm init playwright@latest`-аар төсөл үүсгэж, `playwright.config.ts`-д trace ба video-г асаасан, `getByTestId`-г saucedemo-ийн `data-test` атрибутад тохируулсан.
- `tests/mytest.spec.ts` дотор 4 тест бичсэн:
  1. амжилттай нэвтрэх (URL, "Products" гарчиг, 6 бараа, logout)
  2. буруу нууц үгээр нэвтрэхэд алдааны мессеж гарах
  3. нэвтэрсний дараа бараа сагслах (сагсны тоо, Remove товч, cart хуудас, logout)
  4. түгжигдсэн хэрэглэгч нэвтэрч чадахгүй
- Locator-оор `getByRole`, `getByPlaceholder`, `getByText`, `getByTestId` ашигласан. XPath-аас зайлсхийсэн, учир нь DOM бүтцээс хамаардаг тул жижиг өөрчлөлтөд хугардаг, харин role/text locator нь хэрэглэгчийн харж буйг дагадаг.
- Тест бүр шинэ browser context-т өөрөө нэвтэрдэг тул хоорондоо хамааралгүй (test isolation).
- Logout хийхдээ эхэндээ `getByRole('link', { name: 'Logout' })` ашиглахад тест унасан тул `getByTestId('logout-sidebar-link')` болгон зассан.
- `codegen-sample.ts`: Codegen-оор бичүүлсэн код. Давхардсан click/fill олон, `expect` байхгүй, locator нь CSS селектор тул гараар цэвэрлэх шаардлагатай.
- `tests/trace-demo.spec.ts`: assertion-ыг санаатайгаар буруу болгосон тест (`DEMO_FAIL=1` үед ажиллана). Trace viewer дээр алдаа гарсан алхмыг мөшгисөн.

## Ажиллуулах
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
DEMO_FAIL=1 npx playwright test trace-demo
npx playwright show-trace <trace.zip>
```

## Нотолгоо
- `evidence/playwright-report/`: HTML report
- `evidence/passing-runs/`: амжилттай ажилласан тестүүдийн trace ба video
- `evidence/trace-demo-failure/`: санаатайгаар унагасан тестийн trace

## Playwright ба Selenium харьцуулсан ажиглалт
Playwright элемент харагдах, идэвхтэй болтол автоматаар хүлээдэг (auto-wait) тул би гараар wait бичих шаардлагагүй байсан, харин Selenium дээр explicit wait бичихгүй бол тест тогтворгүй болдог. Playwright-ийн хөтчүүдийг `npx playwright install` гэсэн нэг командаар суулгадаг бол Selenium-д хөтөч бүрд тусдаа driver хэрэгтэй. Codegen нь миний хийсэн үйлдлийг шууд код болгосон нь хурдан эхлэхэд тус болсон ч assertion бичээгүй, давхардсан мөр их байсан тул гараар цэвэрлэх шаардлагатай болсон. Trace viewer нь хамгийн хэрэгтэй санагдсан: assertion-ыг санаатай унагахад алхам бүрийн дэлгэц, алдааны мессеж, кодын мөрийг нэг дороос харж, яг юу буруу болсныг шууд олсон. Selenium дээр ийм мэдээллийг лог ба screenshot-оор л олдог. Хоёулаа Apache 2.0 лицензтэй үнэгүй хэрэгсэл тул сонголт зардлаас биш техникийн давуу талаас хамаарна. Selenium-ийн экосистем илүү өргөн, хуучин төслүүдэд түгээмэл боловч шинэ төсөлд би Playwright-ийг сонгоно.

##  AI ашигласан тухай дүгнэлт
Нэвтрэх хуудасны тестүүдийн анхны хувилбарыг Claude-ээр үүсгүүлсэн бөгөөд helper функц (`login`, `logout`), config-д `testIdAttribute` тохируулсан зэргээрээ миний бичих байсан кодоос илүү цэгцтэй байсан. . 
