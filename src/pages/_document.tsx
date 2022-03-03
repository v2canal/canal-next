import Document, { Html, Head, Main, NextScript } from 'next/document'

// 重写文档
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content="个人博客技术分享" />
        </Head>
        <title>canal的web世界</title>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}
export default MyDocument