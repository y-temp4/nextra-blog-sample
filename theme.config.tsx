import type { NextraBlogTheme } from "nextra-theme-blog";

export default {
  footer: <p>© Yuki Terashima</p>,
  head: ({ meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "続きを読む →",
  postFooter: "ここまで読んでいただき、ありがとうございました。",
  darkMode: true,
  navs: [
    {
      url: "https://y-temp4.com",
      name: "自己紹介",
    },
  ],
  titleSuffix: " | サンプルブログ",
} satisfies NextraBlogTheme;
