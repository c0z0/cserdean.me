import React from 'react'

export const GoogleAnalytics = () => (
  <React.Fragment>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-86522507-2"
    />
    <script
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{
        __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-86522507-2');`
      }}
    />
  </React.Fragment>
)

export const Hotjar = () => (
  <script
    // eslint-disable-next-line
    dangerouslySetInnerHTML={{
      __html: `(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:1420645,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
    }}
  />
)
