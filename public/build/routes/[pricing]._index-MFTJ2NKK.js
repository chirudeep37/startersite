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
  Separator,
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

// app/__generated__/[pricing]._index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\__generated__\\\\[pricing]._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\__generated__\\[pricing]._index.tsx"
  );
  import.meta.hot.lastModified = "1698189938761.6084";
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
    "id": "PHeEs4hMZj33Zb35FsLBN",
    "name": "Pricing",
    "title": "Pricing",
    "meta": {
      "description": ""
    },
    "rootInstanceId": "2PFYynoY82EW6YhZd359t",
    "path": "/pricing"
  }
};
var Page = (props) => {
  _s();
  let [sheetOpen, set$sheetOpen] = (0, import_react.useState)(false);
  let onOpenChange = (open) => {
    sheetOpen = open;
    set$sheetOpen(sheetOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, { "data-ws-id": "2PFYynoY82EW6YhZd359t", "data-ws-component": "Body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "fV1dSPiojY8LffmRahcoE", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "hCrOEWk9TWQYyVMtCWD98", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TWSfZDEQ22jm6ORuD81bO", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "91efxtQVNXMPQCM8RISLw", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FhAJxmce_FA6XmDDVIW3i", "data-ws-component": "Link", href: "/", target: "_self", prefetch: "intent", children: "SaaS Product" }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "qiJP4lRhBsQYrsjtQw1zm", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "Kg7CsP8B_x57o4M1loipu", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "gfC19v0WOUgUBofuzW7Ls", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3", "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog", open: sheetOpen, onOpenChange, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { "data-ws-id": "13XUUVUTbo8ogBwnc2-zT", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { "data-ws-id": "CpZHAp7GJUwle5AEC_STZ", "data-ws-component": "Button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "0emPLKUBAOQTyVrPfa1V5", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, { "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { "data-ws-id": "7mJmpqVW07KKydweeQWDB", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GYmubcqsrJQtUpVYAJlR9", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FDeooXsbMGHKYgkIJbCyw", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "e2XsIImkQ3eAKNN7vhISP", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4VgBDNAygLhwa4uli1-zy", "data-ws-component": "Box", tabIndex: 0 }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 111,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 74,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "UO1BEGnr4YkKPt0MT8QWI", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ln2UtZuKuuwhTJi9J-r4m", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "0dAeQkUiFU-8swg9sF3zc", "data-ws-component": "Heading", children: "Pricing" }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "H6FlRRIKIGH2qBTOLDpUC", "data-ws-component": "Text", children: "We've crafted pricing options that cater to businesses of all sizes, from startups to established enterprises." }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "ZHJ34Ju85qYbDZLk6rNSB", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "cKEfbHO_Z62b419KEeDuD", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-Ns0a4fns6nARAsaY9w-j", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Jn-o7ilBBp7XQ5CTL0i3L", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "rIx2T8qZCYzBESwFnYGl1", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "3thIc18CdC4qfHc0oG3fS", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qJjE-g7_90Hcn5OazMAkz", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hAyuZ-RAWMquhZWZ5XAOJ", "data-ws-component": "Text", children: "Free" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 136,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "j7JHZA1WgR3TlX8kuO1Ww", "data-ws-component": "Heading", children: "Free for everyone" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 139,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "aKfUglcP9uH-rk1U6VmEw", "data-ws-component": "Separator" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 143,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "flXzm6ByPWPg8IsUQ3bGH", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ob3zrG9uqaNgp97BRCrMh", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "7eeo4T54Zwgt3tWura-mA", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 146,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "VEDjYSbUNLfs_gw66cRtA", "data-ws-component": "Text", children: "Unlimited members" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 147,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 145,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "u1YblY88u8BpkPEcsxZvY", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "uNMvbM7OJ-ekHeqBKVpP0", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 152,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "cqAGQfqCDRyLI_fqHa5fH", "data-ws-component": "Text", children: "250 issues (unlimited archived)" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 153,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 151,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "X-m8nDACcMhbhNFaf2tZl", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "rkPC2m68n1jyS33GgQXGu", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "PHgbVAJhS2lQ-jjkQ4FPJ", "data-ws-component": "Text", children: "Import and export" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 159,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CYllBijBgetZHdEXD00T5", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "JiCzO1mTWL9p4BfgXOTIM", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 164,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "C-yFbnR4GLrbl9J_fpgsX", "data-ws-component": "Text", children: "Integrations, APIs, webhooks" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 165,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 163,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "q9KyCG6eZg_SGof6mtO0P", "data-ws-component": "Link", href: "/pricing", prefetch: "intent", children: "Free" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RirPNBndJmlwR1n0tNtyW", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qSrcVqlMgZuZQb8lZp6ci", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bFn8XpRKdwfy79lM24Syb", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "01pRKVtyl1hcAQpQIJ6lj", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "xNlkQ6IeWFEhyjPq58gTv", "data-ws-component": "Text", children: "Standard" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 180,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "2wy_t_EAHh3Lyia7jx2Tw", "data-ws-component": "Heading", children: "$8 per user/month" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "iSKIzKb3fv1A-wVodUBgV", "data-ws-component": "Separator" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "zuhl8Owhn-2uwqEZ_xEYB", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "PhuPRBHe-rI6A1CTWLlnd", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "tHqoib_BIUFE7nvi5B4AD", "data-ws-component": "Text", children: "Everything in Free, plus..." }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 190,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 189,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "n_l9vBuXrMAWvahH1NTEU", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Pdyl1fng7S006l5xQvjIX", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6cHYYQ0t02ZW8FwWPnKKF", "data-ws-component": "Text", children: "Unlimited issues and file uploads" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 194,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EdVywKKrjml9RQRAwIJ1g", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "D6weP7N8AT6j-3NRnZcQO", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 201,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "YpqpFFvAgsMmOTlCNdHbT", "data-ws-component": "Text", children: "Guest accounts, private teams" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 202,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LuC99KxBaS1cfoASgXDee", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "zoRtbOgN0SVwrBkBRp13U", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 207,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "P6qIWficJXyfkIrvEH5k7", "data-ws-component": "Text", children: "Admin tools" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 208,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "YKPWqa77s9U-6XUNigvTG", "data-ws-component": "Link", href: "/pricing", children: "Standard" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 214,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "QCRnRnWDS5lilxAd9Ai_C", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "2xiKzSplG7rNQoT76D0tz", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "AuVcBecFSASMvRxU5WdMs", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_kIHOdhzPM_Q-xdKDRCIb", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6twHyszYQvnIAYxfdnKyo", "data-ws-component": "Text", children: "Plus" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 223,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "xAoOWH44wwjOfOObRnXzw", "data-ws-component": "Heading", children: "$14 per user/month" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 226,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "MizaMZbMNqwnIsCddIp9N", "data-ws-component": "Separator" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FSNwRMsds6fK1plSvlygz", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LMMlDSLfDaGBr-57cwUQS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "ySdqGrE-RX6osFl60zNdf", "data-ws-component": "Text", children: "Everything in Standard, plus..." }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 233,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 232,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qHT6r5-lnpYs3XTV1Ye6P", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "bjchn2889dazpw9_995WW", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 238,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "XemvmOtK4EeZFWhXP4BEN", "data-ws-component": "Text", children: "SAML / Single Sign On" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 239,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 237,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "9wgH-lbI69o1ioXiNsebJ", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "5UYnbK731H1nAqKFpVpc-", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "AWAXrmytNYbmnVt0KHhqf", "data-ws-component": "Text", children: "Advanced authentication controls" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "nRz8ZHiiklXmDaYfGq834", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "08vFSEeQmjCeSIuqtiE34", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 250,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "vPs9trmbHznVkdVnHEJvL", "data-ws-component": "Text", children: "Linear insights and SLAs" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 249,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fjysnt3-EORHjzAdrdvuY", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "LzH861PHwJY52nGb3SGYr", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 256,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "bSlGiOi5JlBEVdXvEGTxS", "data-ws-component": "Text", children: "Priority support" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 257,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 231,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 221,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "D9Ma82venPH1VTWNbgygy", "data-ws-component": "Link", prefetch: "intent", children: "Plus" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 263,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "P3XKiC1FtxBUoOsXWG5Uw", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "R98HKnes-qNJzV-ep7Jti", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "y8TXQ-NYjqDhNm5y7aHVg", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "7xyEGRIE6XZhQdCzy0Dig", "data-ws-component": "Heading", children: "Enterprise" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "9CstwGpb9yG5cjTh0fCCj", "data-ws-component": "Text", children: "Built for Enterprises who want to scale with confidence, Linear Enterprise offers advanced security, powerful admin controls, and more." }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "K4qKBFthQ0-nagRpIxoc9", "data-ws-component": "Separator" }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 281,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CHqci2ocxhKqwpzIkMZa9", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "vPQhvBGDl_k5zmj-6Us5f", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "g6j0Djz3piKtnh3WyU_U1", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "OgwB18bvbE8RP5qhb6pa9", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "QiOOQC1dS-VEBD5lbcL-A", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 286,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Cs147WBfh2NGks7IKdfO-", "data-ws-component": "Text", children: "No limits" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 287,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 285,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "eBG7ghfiuvhy_TtLTyMED", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "STS2foKcx641TAfYBxfqB", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 292,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "oeONApm_LMhw2QPkXqFMp", "data-ws-component": "Text", children: "On-premises" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 293,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 291,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "z-rk6MezOS_BfB3OoIo-r", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "EZ-IGQMFPvuuuVvwf29KW", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 298,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "18_t7N2C1xkLZYYH_Jw1M", "data-ws-component": "Text", children: "Enterprise SSO" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 299,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 297,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 284,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "MfIXa_tcB0lupuMjjkh_k", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bJ5NIh4mBSqnzxpSk8wXU", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Vz-F-AW2jbbQdj6HKmwxl", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 306,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "WnzHG3cXdg9-x5_u9V0YP", "data-ws-component": "Text", children: "Granular permissions" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 307,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 305,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "v--zuNphpFJDR0VPcGxu6", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Nghd5o1YnnSxepvl2b9wJ", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 312,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "149vaPz-M5SGVibxgxwre", "data-ws-component": "Text", children: "Customer success manager" }, void 0, false, {
                  fileName: "app/__generated__/[pricing]._index.tsx",
                  lineNumber: 313,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 311,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 304,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "gLh44Sz2K9RE3PyVRS61f", "data-ws-component": "Link", children: "Contact Sales" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 319,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 271,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "zlseBM4CEv_ZGJf_0dqS3", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ywI07nAaOlVkzjW1Stzc-", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "zsrgoJ8oKyEyl9_4eWtRG", "data-ws-component": "Box" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 327,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bZdFZ0ZMdhYTcmWVlD0kg", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "88tHBAMxt_dIY-lwsxmaE", "data-ws-component": "Text", children: "Free" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 329,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 328,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "3OcZC2DDt5kpF0quwD7gK", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "51NGffY6vvNajTR4H-eVi", "data-ws-component": "Text", children: "Standard" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 334,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 333,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JHH_74tIR1R8IMUbzYUic", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "vspGe9wR84k0XvkJywkRY", "data-ws-component": "Text", children: "Plus" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 338,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 326,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4SAaaXUMUBWwfNXT4hqLX", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "xVGvr31CLvb0ce5azrnIu", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gt8coZ-Io7TL8DI9Kcb29", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "aqq_rdTp27njZqgtj0Ktn", "data-ws-component": "Text", children: "Usage" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 346,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 345,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aW3E7Y09PPP_2H1jqPf9A", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "GECc2CBknuyWXffP2lBsR", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "UhvE4ONyUSiQdJctOIXG3", "data-ws-component": "Text", children: "Members" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 354,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 353,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "2j093ujXsie0EmFMEz2Km", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "5XdSwwvjqbD78ko22h_-Y", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 359,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "eyTmXamNQr-Mx88PMNzlk", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 362,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 358,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TsdFkCwPRsNi7PGzufvyO", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hKROoUafsWkDfrPPmw-SM", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 365,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "SNqHWl3-g4S2qPzsrZ3Iw", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 368,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 364,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-2KPkzAkedk-G2L8Ai2B2", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "XBQAC906MyuDcZf46PLTd", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 371,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "_7to2SJiESkHdtK2dzMwc", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 374,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 370,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 352,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "elXC9JAVBja02fLvZ0rWD", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "q-gWyuVCHeMiB02Wiw_Wn", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "DpjARR4BwZRDgK7EAslbw", "data-ws-component": "Text", children: "File upload size" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 379,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 378,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "o6B_73_ObmOMyeb4PWZaD", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "2Dpc9RH1qZH5UEMRoo-KP", "data-ws-component": "Text", children: "10 MB" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 384,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 383,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "MlEHhaV7T_pa3b7FlH6lD", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "ImMhUxcqKKRNh0RjCG1QK", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 389,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "ui0WIfkNdkXiIgwbyvaFU", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 392,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tPiZQBBBgo1AhW6jStL1T", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "1b5CM00KtyuGJT3qkyIBL", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 395,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "nrfoyoHXMd-j9fnpPuX-P", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 398,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 394,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 377,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "uk1qswGFDeOS8aqNkKy5n", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JL-qGjPyp-idmwC1PoX5R", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "SI0npS6I5nbC8cQIbuQoU", "data-ws-component": "Text", children: "File upload volume" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 403,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 402,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "rJqjTLUlheZV5xM2cN4qy", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "RNO7RG50HVWgU4Zr9wopC", "data-ws-component": "Text", children: "150 MB / month" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 408,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 407,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ulLH7JKcYXKJltVk4HlGy", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "g_I3fggwgNlS8czYisPu1", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 413,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "xm1IR9MriaW6I7luMJqnW", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 416,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 412,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "mhwC32pigAdHJl89PKsJq", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "UQKCOb2-jI7UsZZvJqqb0", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 419,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "6cEVfVYk4HN72m4MX4xbf", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 422,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 418,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 401,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "xPMOVidnzw39XVt9rL3La", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Vh9n2qy845XtiWq8BkxLU", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "0btA5XZ5Q9HyokOCVg5bf", "data-ws-component": "Text", children: "Issues (excluding Archive)" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 427,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 426,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "mdsE8hlaxK0eSvTJM6YeQ", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "uQYj21W1VhK6s3aEDMZ_0", "data-ws-component": "Text", children: "150 MB / month" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 432,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 431,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jMpLWK6ivfXV7SOpQSssb", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "pIDk_tHvFVmBOaVB8Uqp9", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 437,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Aald2pArulI0kUkU3wMo1", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 440,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 436,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bZfu9C01bVHYjZtNK79sn", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "CjI2zVnGpC4TUWy6WmIhR", "data-ws-component": "Text", children: "Unlimited" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 443,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "p31nT2iD9MU5PWkoIBue8", "data-ws-component": "Image", src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg" }, void 0, false, {
                fileName: "app/__generated__/[pricing]._index.tsx",
                lineNumber: 446,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 442,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 425,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 344,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "rter82FqZcCc4ixCr1OQr", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ACd0S38js8hmlG4zcv_PE", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "BXF1LnPkQSx-SmatQJ7Es", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6utQydusimIZUH3sBDOGa", "data-ws-component": "Text", children: "Features" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 453,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 452,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 451,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aFss394Y3o-9SovgPPaOp", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fbCYXi36Zxh5Ofl31_lOw", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "T7iYrocmDcnFvsxZ6yPsM", "data-ws-component": "Text", children: "Issues, projects, and cycles" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 460,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 459,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "k5Z9-jMwzzGVnT1zmDZJW", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "wmjxXuipVoZ2UfIM_EVhn", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "rfIISmw3w7resU2pcyxDt", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 466,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 465,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 464,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "mxGYC2SVL-y7lrt4zW5sX", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Og1eK9fAQ5QLaFCmGM_j8", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "g47wiZw7J30U2rhe4FCi6", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 471,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 470,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 469,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "uzSRPSDOM_IviyxgD-YKI", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-ityrbQYiSYEZhnjGZsgD", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "fZw90OoZRXlsqzSPQS4y-", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 476,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 475,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 474,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 458,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "BgtCZL5g8SIyEnXIiuv4K", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "lRIJuNtV35MAAlOdg-OFb", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "JbwGcmuoQy0geQrSr8WUB", "data-ws-component": "Text", children: "Integrations" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 482,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 481,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hW8l40triAwvantz1ei6x", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Cmcl0jNUyeik3JxkiHQ1G", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "nx44dha0P1gB93v9wsJRB", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 488,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 487,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 486,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jA6HpMsRNQBRNA9g3-rvi", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jNrbP8-g65OhiL79Jb2LS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "HDozw845GeRB2uLvZ7st1", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 493,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 492,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 491,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gFZ5TfGW2KBS3lw97VlYr", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "MlKju-2CC4hCXaWxI9WJa", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Ry1imH7i1gvUkGQUKAxT0", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 498,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 497,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 496,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 480,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TNEeWzbyd4iQR_OGty8_d", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7Tfchjrk7cYq0jn6bsVun", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "3T1yOpTALgKyqi4MFJXXG", "data-ws-component": "Text", children: "API and Webhook access" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 504,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 503,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "trFTppoRVw036ptpiZ-y1", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "y-2fBW0mgMM9l-lrmYzCN", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "J3-BhIltv0q-7fhp-dzNf", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 510,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 509,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 508,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "mMgwFxqAz8KU2z7eItbXM", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Jj2EQfyHQEbuBIvzOWerx", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "JqlYhD6iJ8Ws9Vc96CzwP", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 515,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 514,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 513,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Vp086h6MvQpOC3bU2El3A", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "hHZjvHO4lczIEKoYHX6IT", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "-_z540R9JO9vCdbpk4LPi", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 520,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 519,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 518,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 502,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "s8sWVFQF48bXX6_1O1QqZ", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "iyxKRF1wBquMtbFdGNF-k", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "l6peW4ZS92Lbx2cYfTvlU", "data-ws-component": "Text", children: "Import and export" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 526,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 525,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "zpEHYQsbTVHS1mKrmfXwu", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fAIdUFn45hfyQhM0ECOxB", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "53ZaM1Ev6V7lyGlMyQ-K_", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 532,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 531,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 530,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "NSVTxlkOphsae0MY9DXSQ", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "0gP64UrDQTJHWBPkyZeeK", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "zNGhj3gCcI80PhKbYeHzs", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 537,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 536,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 535,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "OJs1rOVIlbz5NJmcJA_WP", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "0mksVYzcxxq-ldQ-dNOmu", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "VQlUsj5nwsvyttDaSeKjx", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 542,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 541,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 540,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 524,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "QohG5GvOXxCjb40OZNIwl", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Sqr-0ENdfkOOjDXmUED3c", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Z8ltSECh3fJwbnjPvK3Vj", "data-ws-component": "Text", children: "Private teams" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 548,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 547,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "28-3K6-UB9iuHsoiE_0cY", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 552,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "iTaHWqTXcmLueBJ4-_MIV", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RTXn_YXixCKsqxoPnckNS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "UYmcvpXFZMUyGBPhSqbUM", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 555,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 554,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 553,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_b_NQILC5f4zS1E7onVcA", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "vFfqHKuERdfMEVKPgeRyx", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "JLC0FB93l-oIzB5BntCju", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 560,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 559,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 558,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 546,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JMEWH60xNLpwD4zr09bc9", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ekypgAg2YtmSkct3ERiOF", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "w2t_V0GGWRZ8D0FFaZJL7", "data-ws-component": "Text", children: "Guest accounts" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 566,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 565,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "yjFmjarjBOtzF9VSRJTmI", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 570,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Q3WX1RQbDeZMvMH2yJ_W0", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "yYAi-Xe4dfxJeJ04hIO6F", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "q8ot2VukYX5uzPhds5bzx", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 573,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 572,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 571,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7Ap8_NmmG6z4f3f8UL27Q", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "GLh0YmM7yyyJknlMzwO8J", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "genObiviobkBXKHP2x7pR", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 578,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 577,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 576,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 564,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "yahS1smY4wPXPRYhH3ZY9", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "PwJkVO08BCHSTc8T2qKCY", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "OfdPPsKakZTPWEXGMbIg1", "data-ws-component": "Text", children: "SLAs" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 584,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 583,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "U0_okBbsHIxsid8jhbsr-", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 588,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "h-9dfVT6hAX2SfxVsFcd3", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 589,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ccg-NnqH06QwHZ0eKRAAJ", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "sSMvFvA6CtZBeFSyaU4_b", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "FT5XBwfeIh5YR_tZsopTU", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 592,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 591,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 590,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 582,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 450,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "NVYj877b3aX1V2RzMOKIQ", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gt-kqEkoAvDNvL2oLMC2R", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "AlZJRpBxW7JhgGBavUVry", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "TQAjtqhrRyNwMaUk5ha2i", "data-ws-component": "Text", children: "Analytics & Reporting" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 600,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 599,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 598,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "NJR956RQW_Iduaf4BlXSm", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "viMVTALfTcSKHNo-7o7Hl", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "3Bv_kBujUovdRRxfW6ALr", "data-ws-component": "Text", children: "Progress reports" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 607,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 606,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RxxS-RxqEGKDnuiYYwMJh", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "HujIEpLI-vaFh0iDBjSFs", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "D4c1W4YqRvfdxyf2f2KNu", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 613,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 612,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 611,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EaXg-7qIiWrC1NrXChzLo", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CjgTo1HPg-t28TPfuwaNe", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "eyVGarKHkpBGTw524PkcK", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 618,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 617,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 616,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FoHM7kVDiqMztVKNqXJLa", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4i7gPinx2lv553Q19wJbo", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Rg-_VcJ1UKXzPSkUvlc8y", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 623,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 622,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 621,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 605,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "J9fk4FtuX0MGuZgFucbt3", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "msMOgJdROIhsFrDqQLYAx", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "KGQjG0dLdEJcHHPWYsHiE", "data-ws-component": "Text", children: "Insights" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 629,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 628,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bKPPs4yAJj0apjg8svOzi", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 633,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ocgUL0ALB4SFndmjxn2fy", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 634,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "0FAwYuACjo3vLdC6jiSpl", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "1xELZ1DSJzl2jvZNLP4Bl", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "0ee9ZNAXntytkUQBaKDjs", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 637,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 636,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 635,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 627,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gqV0jQBleg6aORSC_cAO9", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "oy_LuuANQopI4S10rvnh6", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "H8Q9WMwt1Ue4oAPQ1LDhM", "data-ws-component": "Text", children: "Data warehouse sync" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 643,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 642,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "B-EvJgdcrgGZL6sBa1Tc7", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 647,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "wuFMqTim7tpmWC_xfwqj_", "data-ws-component": "Box" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 648,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_FsRoiBSdMpj0YpRM9X2y", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_cAd93rATyDX6Um3im0aS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "FR4_pqbTpHifCsbG8fBXI", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 651,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 650,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/[pricing]._index.tsx",
              lineNumber: 649,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 641,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 597,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 325,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 120,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "OFzNrCRa8dkz9SNK5itt0", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "LXAE0omYOBDRhwHgmjbxd", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T3kf2U4vSUW1jD4y_NEma", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_5z42eLI3fQfzg74Ywbb1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "8_lYbS23oem75lqyneJKk", "data-ws-component": "Link", children: "SaaS Product" }, void 0, false, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 663,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "xJocVo6XEiFAGYZU4WEBy", "data-ws-component": "Text", children: "Company" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 667,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "OemFDMxMz1dQm6ZNizOMu", "data-ws-component": "Link", children: "Team" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 670,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd", "data-ws-component": "Link", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 673,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6", "data-ws-component": "Link", children: "Terms of Service" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 676,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 666,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 662,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jNyPk4jlM6WQIun_94FT1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dJ3D3qquPPEVbf4FQytOh", "data-ws-component": "Text", children: "Community" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 683,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "KF0zY92pvFsNrmUkiD2iq", "data-ws-component": "Link", children: "Github" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 686,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "k_TUj7O7myu3xDr7wGUNx", "data-ws-component": "Link", children: "Discord" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 689,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "dLWBQCL9gyAllSg5RXwyU", "data-ws-component": "Link", children: "Twitter" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 692,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_", "data-ws-component": "Link", children: "Product Hunt" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 695,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 682,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EtrG_tdm2KROkPiB9DlEM", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "sQd2JlvN3_sraUU2JjqrV", "data-ws-component": "Text", children: "Product" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 700,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_", "data-ws-component": "Link", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 703,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "av5H5w4bddISdUjP9Fxl0", "data-ws-component": "Link", children: "Download" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 706,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "CP_4Oip6tvDePQJWy5Pma", "data-ws-component": "Link", children: "Source Code" }, void 0, false, {
            fileName: "app/__generated__/[pricing]._index.tsx",
            lineNumber: 709,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/[pricing]._index.tsx",
          lineNumber: 699,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 681,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 661,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 660,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 659,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 658,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "SACy98L7mrmepVUjF3EDb", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "TpTp2RjbCtW5ofWZSiagR", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "UZtdu19rzJ0V6K_-TQfot", "data-ws-component": "Link", href: "https://webstudio.is/", prefetch: "none", target: "_blank", "aria-label": "", rel: "nofollow", rel: "nofollow", rel: "nofollow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "xP5kvTqG1Ud1udrWZC0cD", "data-ws-component": "Image", src: "/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg", alt: "", loading: "eager", "aria-hidden": true }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 721,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dt6LFeOnmEKrCnCGPuGeB", "data-ws-component": "Text", children: "Built with Webstudio" }, void 0, false, {
        fileName: "app/__generated__/[pricing]._index.tsx",
        lineNumber: 722,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 720,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 719,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/[pricing]._index.tsx",
      lineNumber: 718,
      columnNumber: 5
    }, this),
    props.scripts
  ] }, void 0, true, {
    fileName: "app/__generated__/[pricing]._index.tsx",
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

// app/routes/[pricing]._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\[pricing]._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\[pricing]._index.tsx"
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
      fileName: "app/routes/[pricing]._index.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/routes/[pricing]._index.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/[pricing]._index.tsx",
    lineNumber: 157,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/routes/[pricing]._index.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/[pricing]._index.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
};
_c2 = Outlet;
var pricing_index_default = Outlet;
var _c2;
$RefreshReg$(_c2, "Outlet");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  pricing_index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/[pricing]._index-MFTJ2NKK.js.map
