import {
  Body,
  Box,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
  Fragment,
  Heading,
  HtmlEmbed,
  Image,
  Link,
  Paragraph,
  Slot,
  Text,
  assetBaseUrl,
  generated_default,
  imageBaseUrl,
  imageLoader
} from "/build/_shared/chunk-P5ZVNOSD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  ReactSdkContext
} from "/build/_shared/chunk-Q4GJTMHU.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-6UYRH6XX.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-OGDJRY6N.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/__generated__/[about]._index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\__generated__\\\\[about]._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\__generated__\\[about]._index.tsx"
  );
  import.meta.hot.lastModified = "1698189938766.595";
}
var fontAssets = [{
  "id": "1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95",
  "name": "SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2",
  "description": null,
  "projectId": "e33e4ed6-5c66-452c-815a-7ad705748e3e",
  "size": 49256,
  "type": "font",
  "createdAt": "2023-06-29T05:05:10.384Z",
  "format": "woff2",
  "meta": {
    "family": "Space Grotesk",
    "variationAxes": {
      "wght": {
        "name": "Weight",
        "min": 300,
        "default": 300,
        "max": 700
      }
    }
  }
}];
var pageData = {
  "page": {
    "id": "7xIBU59ZcBYTdlcKpsBLq",
    "name": "About",
    "title": "About",
    "meta": {
      "description": ""
    },
    "rootInstanceId": "Aij73qPi0LPlTuTPUho6r",
    "path": "/about"
  }
};
var Page = (props) => {
  _s();
  let [sheetOpen, set$sheetOpen] = (0, import_react.useState)(false);
  let onOpenChange = (open) => {
    sheetOpen = open;
    set$sheetOpen(sheetOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, { "data-ws-id": "Aij73qPi0LPlTuTPUho6r", "data-ws-component": "Body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "QEphehzbsp6Mu9uZokWha", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "hCrOEWk9TWQYyVMtCWD98", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TWSfZDEQ22jm6ORuD81bO", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "91efxtQVNXMPQCM8RISLw", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FhAJxmce_FA6XmDDVIW3i", "data-ws-component": "Link", href: "/", target: "_self", prefetch: "intent", children: "SaaS Product" }, void 0, false, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "qiJP4lRhBsQYrsjtQw1zm", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "Kg7CsP8B_x57o4M1loipu", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "gfC19v0WOUgUBofuzW7Ls", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3", "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog", open: sheetOpen, onOpenChange, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { "data-ws-id": "13XUUVUTbo8ogBwnc2-zT", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { "data-ws-id": "CpZHAp7GJUwle5AEC_STZ", "data-ws-component": "Button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "0emPLKUBAOQTyVrPfa1V5", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, { "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { "data-ws-id": "7mJmpqVW07KKydweeQWDB", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GYmubcqsrJQtUpVYAJlR9", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FDeooXsbMGHKYgkIJbCyw", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "e2XsIImkQ3eAKNN7vhISP", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4VgBDNAygLhwa4uli1-zy", "data-ws-component": "Box", tabIndex: 0 }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 111,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 74,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "y0ovkn8orARIOOFqBCavY", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "l6gT2u2sBW1AyrnidCKGr", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "krOa8otC_lr-PReApOjUm", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "KqsPjlsJGROcfkdutawGv", "data-ws-component": "Image", src: "/assets/annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg", loading: "eager" }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "oQGErZO0PHEQBYuO3VNsq", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "4yQhPsPx7CKfbsbFv7GSC", "data-ws-component": "Heading", children: "About" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 126,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "7hjBxVpPbjZZY1DEZ0sfg", "data-ws-component": "Text", children: "Together, we stand dedicated to transforming the way teams work, embracing the power of connection to nurture innovation, and creating an environment where every team member can thrive." }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 129,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FJISk8X7xoXFT9tli9YGI", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "DJRG8P9fNMzXwaAWduVc2", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "Ob9A1gLACeZM9WM8NErhM", "data-ws-component": "Heading", children: "Meet the Visionaries" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "fRbeWRTS0jEyRNgaJkXaf", "data-ws-component": "Text", children: "With diverse backgrounds and expertise spanning technology, design, and business strategy, we bring a wealth of knowledge to the table. " }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 139,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-BHgfImeEbZMuuejfqHG_", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JbP0Y5kZoq3Agmn_vxWxC", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hNvWj0qtQJIKmOf-P_UTB", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "kUmxAfeDen3wlS1gGI0Bf", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "dpoh5YI5b5UgU5gFP5mzb", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "DAGHbhcf4iVuJMHfEzCwn", "data-ws-component": "Image", src: "/assets/ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 148,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 147,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7oCVAiClOho_XCMBg0hv5", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "ffsq_b52zsMyol1bUrhpg", "data-ws-component": "Heading", children: "Jerome Bell" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 151,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "3Pcu-6ZezwqGQr-xMYH-P", "data-ws-component": "Paragraph", children: "Co-founder and CEO" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 154,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 150,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aBCYAqIBUO092lnD_vbit", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 158,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 146,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ae58U7QqzrfPIpfbOdMdu", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aRdjGH0A-sDS2qQLcThGN", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "LuKhORPYyhX7i0J4Gzk4U", "data-ws-component": "Image", src: "/assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 162,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 161,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "lbywQQ4USXEJuoWZRalm9", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "exha--kaoHwF0yLH1glbr", "data-ws-component": "Heading", children: "Elena Williams" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 165,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "YEY7FFWYSXbl_DM2cHBh5", "data-ws-component": "Paragraph", children: "Co-founder and CTO" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 168,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 164,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "pVzZzd-Av4TlUbIfYY2Df", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 172,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 160,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 145,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "oY1ZFvMr3NOT-JpRHWSDS", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8SdHBGloKSMADdsoz2Mvl", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "XDFcX4iEu6CdHaqxDRTRx", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Q7dM5C2-r4z9W3mbujdnt", "data-ws-component": "Image", src: "/assets/daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 178,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 177,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EcquI3M10mIqkLgHa3gH7", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "19ZRkH9RncSQrmCEyZ2rg", "data-ws-component": "Heading", children: "Sarah Miller " }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 181,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "X0hdIaoQ39eyMyW_KtU8h", "data-ws-component": "Paragraph", children: "Head of Product Design" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 184,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 180,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hIy_5qVV9QE7EmCLoa4mf", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 188,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 176,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "d_nTMgdxuIg75sX68K4IV", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FqezXZJVy6OIVYgHrGRSL", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "yuWzvn21qpJ4Kfg8C0dMu", "data-ws-component": "Image", src: "/assets/bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 192,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 191,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TISzZI2Y57Xy2yYjH5eKV", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "DfW1FpPEQtnWqPArk25Ow", "data-ws-component": "Heading", children: "David Ramirez" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 195,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "ozBbxQF4S-qgn_Yh1p-qV", "data-ws-component": "Paragraph", children: "Lead Software Engineer" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 198,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 194,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "eUKyHBLJ6KGDi46sfrEmr", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 202,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 190,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 175,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "nj1MYzdWV_0FZ5AnxMvOl", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ym9zpcOavGMeZrdM7ZqKX", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "F9cSJQ08nUA_85aTyppOx", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RgDO_CQD2ZUh2M6rgu8Vg", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "ScbCUoA32ufgfTqunwuGn", "data-ws-component": "Image", src: "/assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 210,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 209,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EqiglCwEnkxvBs-CfDxks", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "6KUnQ2Tbl5t90yBYP8JJS", "data-ws-component": "Heading", children: "Jessica Parker" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 213,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "-JGoXrvf0x8gNNCYAALFu", "data-ws-component": "Paragraph", children: "Marketing and Communications Manager" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 216,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 212,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "V3KAIh83j4Ds3sRcLFnhB", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 220,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 208,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "QM43qR-L_kf7_kQR_nJRb", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ew6AOGKdZu3BtRCo_X06z", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "GqgSaJ3ojuvmyxaOu9dLT", "data-ws-component": "Image", src: "/assets/vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 224,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 223,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aH92ZEzeMR3rv-Z8zA1eO", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "90C73zyxN2tRV_XQs_471", "data-ws-component": "Heading", children: "Robert Thompson" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 227,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "frSPziNd5mNoJBU9aGeao", "data-ws-component": "Paragraph", children: "Business Development Specialist" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 230,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 226,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "2_7fMYITutHccBiEoULE8", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 234,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 222,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 207,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Bi8RArKh4Vi2YGEUEHIGq", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CnAd_amIrnMjCFcqWqwe6", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "miNTCWQJ03RGHuPj8zY0P", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "fXf6nxm7WGsFvcpM0NsD3", "data-ws-component": "Image", src: "/assets/joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 240,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 239,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "XQUz0hor3Sx27gsWIbbUm", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "tfrfOnHQSv7_UwJ09t21P", "data-ws-component": "Heading", children: "Melissa Lee" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 243,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "cxIpc54DrE3N90hf0NNyV", "data-ws-component": "Paragraph", children: "UX/UI Designer" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 246,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 242,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T5eKkyh_v0zNNLNx_dLcH", "data-ws-component": "Box" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 250,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 238,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "xg6gF2toApiQ9aQJ-f2Ca", "data-ws-component": "Box" }, void 0, false, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 252,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 237,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 206,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "cnr-e3CwEJrTFptgAQSwv", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "VZKri5tXDggaswadXecNl", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "p_fjVqVKt0_ouMrm0TraD", "data-ws-component": "Heading", children: "Our Investors" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 259,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "pgtBTdeNiaeYtfqeN87HV", "data-ws-component": "Text", children: "Our investors' trust in our team and our product inspires us to push boundaries, think creatively, and never settle for the status quo." }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 262,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 258,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FDqv4pvBlfYOjCzYPEZdf", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "yJNgCa6i1ZTxh2jqlB2e_", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Y1SEmO3etbUqTdY8t_rXy", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "E7a8ay6Kk09LMyrdNQ2MD", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "vRA5Cim4Trc9cCPlzc-wm", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "_Z_nbuXMarQm1wTKwZYBj", "data-ws-component": "Image", src: "/assets/ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 271,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 270,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Q08XcskX3DpBTRVZ3tqVt", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "D2oczgUKN7INqQ8nDd1C1", "data-ws-component": "Heading", children: "Thomas Anderson" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 274,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "K_3JVeCvgouGt0GBiWJSV", "data-ws-component": "Paragraph", children: "Venture Capital Partners, Managing Director" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 277,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 273,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 269,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "DKDF6PFiwbKQUeKBnagxp", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "5er1IbnT1wzFlADEjnz94", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "tdTcTUxZBEWwuhUA594LO", "data-ws-component": "Image", src: "/assets/sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 284,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 283,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EVYYxjiCjBzKeqFi6VMSw", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "J_a7lfwe0EJjg_F5ohzDP", "data-ws-component": "Heading", children: "Jessica Martinez" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 287,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "HDXZ380j2QehQ2jRWna3X", "data-ws-component": "Paragraph", children: "Tech Innovations Fund, Principal Investor" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 290,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 286,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 282,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 268,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "5ASv0Y9gW1syeVA__xDjv", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "UnlAbUrA9WaWbzrCg--P6", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-ZdIOQOTFk2BgZ3nO72Jw", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "WFQsxzFqj7kpnWi3wXISu", "data-ws-component": "Image", src: "/assets/foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 299,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 298,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "XMClOXjqqj1C7S5F88sRx", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "WIe_KKFBtSWKJOx9vMfW4", "data-ws-component": "Heading", children: "David Wilson" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 302,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "3BNgvFgBEwmay3rR3DesZ", "data-ws-component": "Paragraph", children: "Growth Ventures Inc., Senior Partner" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 305,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 301,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 297,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FQbtc4ny7V8xjPUtA3MqI", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FxQrMynJ7Uq7B7PIkmXNO", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "zhA3mc9ROh4CihqFD6bI8", "data-ws-component": "Image", src: "/assets/christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 312,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 311,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T4NpZiLEsG7jtZ36r3HfJ", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "9bLRXLFEfo9XBKHvKXYwZ", "data-ws-component": "Heading", children: "Rachel Chen" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 315,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "uvZOHZwyMbf1PuxOtq1XN", "data-ws-component": "Paragraph", children: "Impact Investments Group, Head of Investments" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 318,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 314,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 310,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 296,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 267,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Dv9pg_7vl6k2OeM5CFLWo", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "VrVTk_oSzrxS_Q57tLCMa", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KpMUv-_BcXTa6ksYvrw_h", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "eFkpkOLjEsubh0U_m7Mmz", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "I3tindkPwX4cLrafudm-_", "data-ws-component": "Image", src: "/assets/luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 329,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 328,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "dTIMUCrn8C_NdWM5SvKlM", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "YgLe4tL5vAg1zG3EkKUm_", "data-ws-component": "Heading", children: "Jonathan Patel" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 332,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "xiPeu_or6z45Pw7HYsP-9", "data-ws-component": "Paragraph", children: "Global Innovators Fund, Managing Partner" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 335,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 331,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 327,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8JqroTaQBdU7Yirz0C2We", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "lqgmGRHBsu71yj4PaqXGl", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "iOBp1M8075Q_x5QhA9yfv", "data-ws-component": "Image", src: "/assets/jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 342,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 341,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_x3yQ7zrwZ8VZHQVJcLJ2", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "kR5xKldJU9G9psPpLseZ9", "data-ws-component": "Heading", children: "Laura Sanchez" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 345,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "v9RMQW35MhNsOKfn0DfbE", "data-ws-component": "Paragraph", children: "Sustainable Futures Capital, Investment Analyst" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 348,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 344,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 340,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 326,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "d3kuBtzHlozOSX8RL2yL7", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "6i6EsYUbIZpRFiWqAYyAt", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KuAZUMRsyqDAOt9_ve6NT", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "0_SL7kYubQYOSBMUPDaJC", "data-ws-component": "Image", src: "/assets/thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 357,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 356,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ChGADBNm30EX2aD9G0ZUc", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "swn5DQ7eTtIUw-xiwEluD", "data-ws-component": "Heading", children: "Michael Lee" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 360,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "pKAuhgEBNz-FS5ypg35Hk", "data-ws-component": "Paragraph", children: "Strategic Ventures Ltd., Managing Director" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 363,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 359,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 355,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "s0gKMKKf0DSM-_NCfUymx", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ImxFTamSdnj58VUwMuQP4", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "xV5VJN7PrQ42LT0G9ophv", "data-ws-component": "Image", src: "/assets/edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 370,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 369,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7kGFi4uOIK-lZ2KNNEAtz", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "PeTkrcQ4RoS7oaXFjlsfs", "data-ws-component": "Heading", children: "Melissa Thompson" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 373,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "9mEkQwTFgLZJOJ5NpiCA3", "data-ws-component": "Paragraph", children: "FutureTech Fund, Investment Manager" }, void 0, false, {
                    fileName: "app/__generated__/[about]._index.tsx",
                    lineNumber: 376,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/[about]._index.tsx",
                  lineNumber: 372,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[about]._index.tsx",
                lineNumber: 368,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[about]._index.tsx",
              lineNumber: 354,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 325,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 266,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 257,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 120,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "RB-59O22rSqexBPG1nF0Y", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "LXAE0omYOBDRhwHgmjbxd", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T3kf2U4vSUW1jD4y_NEma", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_5z42eLI3fQfzg74Ywbb1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "8_lYbS23oem75lqyneJKk", "data-ws-component": "Link", children: "SaaS Product" }, void 0, false, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "xJocVo6XEiFAGYZU4WEBy", "data-ws-component": "Text", children: "Company" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 395,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "OemFDMxMz1dQm6ZNizOMu", "data-ws-component": "Link", children: "Team" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd", "data-ws-component": "Link", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 401,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6", "data-ws-component": "Link", children: "Terms of Service" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 404,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 394,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 390,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jNyPk4jlM6WQIun_94FT1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dJ3D3qquPPEVbf4FQytOh", "data-ws-component": "Text", children: "Community" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 411,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "KF0zY92pvFsNrmUkiD2iq", "data-ws-component": "Link", children: "Github" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 414,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "k_TUj7O7myu3xDr7wGUNx", "data-ws-component": "Link", children: "Discord" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 417,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "dLWBQCL9gyAllSg5RXwyU", "data-ws-component": "Link", children: "Twitter" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 420,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_", "data-ws-component": "Link", children: "Product Hunt" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 423,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 410,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EtrG_tdm2KROkPiB9DlEM", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "sQd2JlvN3_sraUU2JjqrV", "data-ws-component": "Text", children: "Product" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_", "data-ws-component": "Link", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 431,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "av5H5w4bddISdUjP9Fxl0", "data-ws-component": "Link", children: "Download" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "CP_4Oip6tvDePQJWy5Pma", "data-ws-component": "Link", children: "Source Code" }, void 0, false, {
            fileName: "app/__generated__/[about]._index.tsx",
            lineNumber: 437,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[about]._index.tsx",
          lineNumber: 427,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[about]._index.tsx",
        lineNumber: 409,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 389,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 388,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 387,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[about]._index.tsx",
      lineNumber: 386,
      columnNumber: 5
    }, this),
    props.scripts
  ] }, void 0, true, {
    fileName: "app/__generated__/[about]._index.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s(Page, "hVYZ90npBdx0fbBPPhQMyoYXyuU=");
_c = Page;
var pagesPaths = /* @__PURE__ */ new Set(["", "/pricing", "/about"]);
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/[about]._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\[about]._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\[about]._index.tsx"
  );
}
var meta = () => {
  const {
    page
  } = pageData;
  const metas = [{
    title: page?.title || "Webstudio"
  }];
  for (const [name, value] of Object.entries(page?.meta ?? {})) {
    if (name.startsWith("og:")) {
      metas.push({
        property: name,
        content: value
      });
      continue;
    }
    metas.push({
      name,
      content: value
    });
  }
  return metas;
};
var links = () => {
  const result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  for (const asset of fontAssets) {
    if (asset.type === "font") {
      result.push({
        rel: "preload",
        href: assetBaseUrl + asset.name,
        as: "font",
        crossOrigin: "anonymous"
        // @todo add mimeType
        // type: asset.mimeType,
      });
    }
  }
  return result;
};
var Outlet = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ReactSdkContext.Provider, { value: {
    imageLoader,
    assetBaseUrl,
    imageBaseUrl,
    pagesPaths
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { scripts: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/routes/[about]._index.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/routes/[about]._index.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/[about]._index.tsx",
    lineNumber: 157,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/routes/[about]._index.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/[about]._index.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
};
_c2 = Outlet;
var about_index_default = Outlet;
var _c2;
$RefreshReg$(_c2, "Outlet");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  about_index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/[about]._index-6CU2JJAZ.js.map
