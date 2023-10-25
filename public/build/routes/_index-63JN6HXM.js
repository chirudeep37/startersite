import {
  Body,
  Bold,
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

// app/__generated__/_index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\__generated__\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\__generated__\\_index.tsx"
  );
  import.meta.hot.lastModified = "1698189938749.6428";
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
    "id": "9xR9hAVSFQsls07ekq14k",
    "name": "Home",
    "title": "Home",
    "meta": {},
    "rootInstanceId": "yciogBG54zs9zd-BUDKkU",
    "path": ""
  }
};
var Page = (props) => {
  _s();
  let [sheetOpen, set$sheetOpen] = (0, import_react.useState)(false);
  let onOpenChange = (open) => {
    sheetOpen = open;
    set$sheetOpen(sheetOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, { "data-ws-id": "yciogBG54zs9zd-BUDKkU", "data-ws-component": "Body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "SiScM4cpvzPd6wia0aISy", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "hCrOEWk9TWQYyVMtCWD98", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TWSfZDEQ22jm6ORuD81bO", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "91efxtQVNXMPQCM8RISLw", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FhAJxmce_FA6XmDDVIW3i", "data-ws-component": "Link", href: "/", target: "_self", prefetch: "intent", children: "SaaS Product" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "qiJP4lRhBsQYrsjtQw1zm", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "Kg7CsP8B_x57o4M1loipu", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "gfC19v0WOUgUBofuzW7Ls", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3", "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog", open: sheetOpen, onOpenChange, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { "data-ws-id": "13XUUVUTbo8ogBwnc2-zT", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { "data-ws-id": "CpZHAp7GJUwle5AEC_STZ", "data-ws-component": "Button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "0emPLKUBAOQTyVrPfa1V5", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 93,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, { "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { "data-ws-id": "7mJmpqVW07KKydweeQWDB", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GYmubcqsrJQtUpVYAJlR9", "data-ws-component": "Link", href: "/about", target: "_self", prefetch: "intent", children: "About" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 98,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "FDeooXsbMGHKYgkIJbCyw", "data-ws-component": "Link", href: "/pricing", target: "_self", prefetch: "intent", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "e2XsIImkQ3eAKNN7vhISP", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4VgBDNAygLhwa4uli1-zy", "data-ws-component": "Box", tabIndex: 0 }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO", "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HtmlEmbed, { "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz", "data-ws-component": "HtmlEmbed", code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>' }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 109,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 72,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KFt3pU_7bNjPUtVAM_PLs", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8PAZtVQKXTYOaVKPn6qdX", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "IT51c7FjAaBN9pfwTVIaE", "data-ws-component": "Heading", children: "Unleash the Power of Human-Centered Project Management" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "gB69_N0642JvOMPgWZCGp", "data-ws-component": "Text", children: "Revolutionize Collaboration, Cultivate Results, and Embrace the Human Touch" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 123,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "z2H3DBkV5rCM3NPaXnQyv", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "csy41CjHsFYwXBXVp3Nyv", "data-ws-component": "Link", children: "Join our Discord" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 127,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "tR3vEoi_QLIU5p8z9kz10", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "MuR6YNg0tASN8bjEROCUu", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "4hnw7JxeTT89_ZkGPe2Am", "data-ws-component": "Image", src: "/assets/Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TXgdqKTZqfuMWhIPnAEYK", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JJQ6fvuNAHo96VzjHfmW2", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "o0Za1nGa2xP-2My4seoCY", "data-ws-component": "Heading", children: "Seamlessly Blend Efficiency and Personal Connection" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "IFV1xErotBG5OOUkTYcaY", "data-ws-component": "Text", children: "Our innovative SaaS solution is designed to streamline communication and optimize team collaboration, all while preserving the personal touch that fuels creativity and fosters camaraderie." }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Npoj--qYoiz2Vq_28lOE7", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "cHz95BbUB--EFSf8dLV6n", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "qdi_TKOpfhGFjhVqxGm3x", "data-ws-component": "Image", src: "/assets/Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fBvvkiTcc4H8QdZTxNWLx", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "qPqm_tZrFEYDAZv9xaOFb", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "djoJZhznveMly5yeZKAfO", "data-ws-component": "Bold", children: "Virtual Team Building Activities" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 152,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Mhlmn6y2YFcK5svHwuQ2-", "data-ws-component": "Text", children: "Incorporate virtual team-building games and activities directly into the platform to foster camaraderie and strengthen relationships among team members, even if they are geographically dispersed." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 157,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "I7dO95CAhObO7pSN9_W0r", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 151,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tl2jLKlnMsOvtlRs7n3r7", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "B_PnriDK_1PsJufLllMn6", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "2ZiROeh8wjCu9KsC-B6gp", "data-ws-component": "Image", src: "/assets/Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 167,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "x0mrMHOZ90pOfPCCc5RQA", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "-nuiQYW0ug0ew-ppqTzHp", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "mfjkvaBwr5XFzgGoMEXRo", "data-ws-component": "Bold", children: "Empathy Dashboard" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hGPoAEOb95xNcCESH7pa8", "data-ws-component": "Text", children: "Integrate an empathy dashboard that allows team members to express their emotions or well-being through emojis or short status updates, helping others understand their current state and offer support when needed." }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 175,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "dVeYTizLX4FAFN5VtF9k1", "data-ws-component": "Link", children: "Try the App" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 178,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 169,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 165,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 138,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "1PnlhV97NrtGz7T87vPT3", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "5hwKDN6W-9gU9GyYILKFh", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "M_Rv2zfIjIc-1M9kXU1Oq", "data-ws-component": "Heading", children: "4 Power Features Everyone Needs to See" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 186,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "oIggbSbOJkD2s1ldXspbe", "data-ws-component": "Text", children: "These unique features can create a more inclusive, engaging, and productive environment for teams " }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 189,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 185,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "F91Nldn4Ue799PVlcLjjy", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "HhvovkoTEnWxZuKRG1izP", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "vbSAw-knb0qAF8VPpWjVK", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-HCB9trrAOYBcr6xED8Xn", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "ubK4VatcLY0o-35bZ2dLl", "data-ws-component": "Image", src: "/assets/Features_2.1_NIscvc7PVCAtEejnPT2I3.png" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 197,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 196,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "4dgL2HD5RMihMMnKa4ehv", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "wP1Kh6hgjsBxSTMVkFFm2", "data-ws-component": "Bold", children: "Recognition and Kudos System" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 199,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "oFNjby5kD-1GsBEx-Zbsy", "data-ws-component": "Paragraph", children: "Create a dedicated space within the platform for team members to publicly recognize and appreciate each other's efforts and achievements." }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 204,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "W-QSYzsqKgTJdxixukaxz", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "I6wzGycA5PrGgkoOBRT0V", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "9KMNX72hdSqDMXgAuTcKK", "data-ws-component": "Image", src: "/assets/Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 210,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 209,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "_qNLLBuO13NuLSZg6p57m", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "i9RVWEg3lKxy45pYGrh2S", "data-ws-component": "Bold", children: "Personalized Avatars and Profiles" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 213,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 212,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "Wsf0j_EPoiYqYvjpq3J-x", "data-ws-component": "Paragraph", children: "Allow users to create customizable avatars and profiles that showcase their personalities, helping team members connect on a more personal level beyond just work-related discussions" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 217,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 208,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 194,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Y0UdmF2hrH3AvxOJvs2Fz", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fJKYi0adVDK7Bt4u1gIZb", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "xsYGB-Vfqn8tCGLniKFyz", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "qzvuHrBuweB0wtIjIUeFg", "data-ws-component": "Image", src: "/assets/Features_2.3_x8WxiEDSffKUEbdqQdEhA.png" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 224,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "O1v7BgQDtByFm-ildmlqn", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "mUFmHZ2dfx7ILPIg2IAqB", "data-ws-component": "Bold", children: "Collaborative Ideation Spaces" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 228,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 227,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "Frw0SS-3Nc5QuJsCUiLzy", "data-ws-component": "Paragraph", children: "Design virtual brainstorming and ideation spaces that facilitate real-time collaboration, enabling team members to visualize ideas, share feedback, and build upon each other's creativity" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 232,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 223,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RaG82Qpejnuh_blNXDa4M", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "7K6msjzpWj_7nyMZDX6Xp", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "P4SxjJkX2R_idjUkZgfud", "data-ws-component": "Image", src: "/assets/Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 238,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 237,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "XpKJxG8mwCYPsLf5gL0zc", "data-ws-component": "Heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bold, { "data-ws-id": "SLF7GgDxOH_P2qWpuWNie", "data-ws-component": "Bold", children: "Adaptive Task Prioritization" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 241,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 240,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "ha4xx8wHlYroaKCHjMyZk", "data-ws-component": "Paragraph", children: "Utilize machine learning algorithms to analyze individual work patterns and automatically adapt task prioritization, ensuring each team member's workload aligns with their peak productivity times" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 245,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 236,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 222,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 193,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 184,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "55LIleIGwKA_HjsEC3Itt", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "dAzVmqUfB3Lm7aFZC4jLE", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "UPDaGsHQ5LAvAm7mA5rkP", "data-ws-component": "Heading", children: "Impactful Experiences: Testimonials from Teams that Transformed with Us" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 254,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Z1jz2yXQOXPsUhJlGnwdT", "data-ws-component": "Text", children: "From small startups to multinational enterprises, our solution has empowered teams to break down barriers, forge stronger bonds, and achieve remarkable results." }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 257,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 253,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "1GPWE2q-i6T70JXllYPM3", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "4eIUfOFvif5Jd6TKXstIq", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "177r1lN8hSPbPeeFA7yTS", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "g9l5uK5JK4j-tZTBTTETR", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bwJ0uRpb8mM9uKyT9DOUg", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "DEPb5lkg6fuhEm0F5wBEA", "data-ws-component": "Heading", children: `"Our team's morale skyrocketed"` }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 266,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "anNihXulvkXHCGil3SOpJ", "data-ws-component": "Box", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KxQHv7rPurWcK9cXlX223", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 270,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LCArjQeExlYSJrvrJec_-", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 271,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "R4opvdj1By_u04lCbB-0H", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 272,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ofZ8Cww80EuTICgekhI4T", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 273,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "q3SwJr2N5Wq8sJmsx8Fnn", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 274,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 269,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 265,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "VJlKbwMhJ35vHkplaD_sA", "data-ws-component": "Paragraph", children: "The intuitive interface and innovative collaboration features helped us seamlessly connect, even across remote locations. But what truly stood out was the emphasis on empathy and recognition within the platform. We started using the Kudos system to celebrate each other's wins, and the positive energy it generated was remarkable. Our team's morale skyrocketed, and we achieved our project milestones faster than ever. " }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 277,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 264,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "UL4fhMfwVjBc-cxcbxKw4", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "u9k4M3yCJoeLQRfMGX-OZ", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "ZzqR7cVDPQnBSJnI7t7Bv", "data-ws-component": "Image", src: "/assets/andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 283,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 282,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Uy9TgB7PWCWFl6iWR9K3-", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "eYjqUkYtiMy49qo1WFbsU", "data-ws-component": "Text", children: "John, Project Manager" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 286,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "oB09N5RnujuRTPjtyj0-9", "data-ws-component": "Text", children: " XYZ Tech Solutions" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 289,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 285,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 281,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 263,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "XegLW7ouMAtNxDe46MwRX", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "WnL5_cp0irtOLmwOd0NVm", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Q9D9IeQEKGqCoCctLeUGn", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "Z5T2vAb-a8ceatEabbpZ0", "data-ws-component": "Heading", children: '"SaaS Product transformed the way our marketing team operates"' }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 298,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ZJPilMxAVYEW3mMpFt33-", "data-ws-component": "Box", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "NzpDfMZRPvH6AQhoeIozP", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 302,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "vdtGqzp5ti30k1fUzuDSk", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 303,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8Uo24LB1ZFbGrBNGCdJ4t", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 304,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8f1VCeDr6dMavnRHtYj0c", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 305,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "WAl1_nmWmpQdorwvAaQbz", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 306,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 301,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 297,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "46wBFrNP0f_Nvn6OT6C4N", "data-ws-component": "Paragraph", children: "The interactive progress celebrations injected so much fun into our projects, and it felt like a virtual party every time we hit a milestone. The empathy dashboard allowed us to express our emotions and well-being openly, fostering a supportive environment where we felt comfortable discussing our challenges." }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 309,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 296,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-xqMarHLSv1GeM1cwJM1k", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "SvAlqWyeZmcHcnJKsC7sr", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "x4XjpM9cMdlqfJ9lQSGVi", "data-ws-component": "Image", src: "/assets/clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 315,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 314,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jubY3EP8RWdaoWqiU-OyW", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "lpz93qP5z7l6zneLjmTmF", "data-ws-component": "Text", children: "Sarah, Marketing Specialist" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 318,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "oiUz-t9eze5zWn9nWbBKP", "data-ws-component": "Text", children: "ABC Creative Agency" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 321,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 317,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 313,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 295,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 262,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "393cnAjV62UkrqgU32Klf", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "A8HfuREWtHmzqjHxsSKa5", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "8f3Hldq0sdBRmgn1SfqH5", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "r7yRTXT6tNolKn-fiHjGY", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "LrJ_3kjiXv8jQs0fNyS6y", "data-ws-component": "Heading", children: '"the secret sauce behind our recent successes"' }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 332,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KCGNBZ5J9KQuN4tFJ3Hgl", "data-ws-component": "Box", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "SVS3J7hZl6RxQhQjyI7KB", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 336,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "dSqQn_0DoiODHrSkJPJsm", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 337,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "d_zPJ25VsavdlJEvzqUeO", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 338,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "55rIo9Zic647ArJHldnu4", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 339,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "lPQ3eiRUPP9H_ooWE7kt4", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 340,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 335,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 331,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "vOL0BeRQ-Hy_ptfL0frq8", "data-ws-component": "Paragraph", children: "The virtual team-building activities and spontaneous coffee chats have brought us closer, despite being in different time zones. We've seen tremendous productivity gains since implementing this platform, but what impresses me most is the focus on maintaining a human touch. Our team feels more connected than ever, and I believe that's the secret sauce behind our recent successes." }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 343,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 330,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JFLcBNtQN86mBJ5ZfgxPz", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "N-ZJ8d-8Nwn6y5hqZfJS-", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "82xxrJt3aDqLnarWFWevo", "data-ws-component": "Image", src: "/assets/leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 349,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 348,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "nTVAJUPTo5EBSlDU6BF0w", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "eyrnl3jJ9HIPErQkcdmen", "data-ws-component": "Text", children: "Michael, CEO" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 352,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "-C1TMlVdS58YAwRBixZVQ", "data-ws-component": "Text", children: "XYZ Startups" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 355,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 351,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 347,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 329,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "TXmpGtyWpfcLOy_-9tQ1o", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "QxdVdHCMotF0QUkYvk65x", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "z8qJ-XHM0ohThX8b456Nt", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "EHqGGI_Y8_lm1Vy0Bwgwh", "data-ws-component": "Heading", children: '"It was a great experience"' }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 364,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ro9kNZVE5WlXjp6rLqWl1", "data-ws-component": "Box", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "JXSCKrv4IOY_-EDbyHnae", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 368,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "r-l-s0DpNh1fmVtvP8siM", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 369,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ymvp_fWOw4cf7sWj8ZSek", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 370,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "KUNV_X-vrBkHeO7SqvLEP", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 371,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "phzXFNIR02M7L_ZOU6B6p", "data-ws-component": "Box" }, void 0, false, {
                      fileName: "app/__generated__/_index.tsx",
                      lineNumber: 372,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 367,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 363,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { "data-ws-id": "qI_sG3qu8FJTtuIa0a-fU", "data-ws-component": "Paragraph", children: "The sentiment analysis for feedback ensures our communications are constructive and considerate, and the adaptive task prioritization keeps everyone engaged and motivated. We've become more efficient, but we haven't lost sight of the human element that drives our passion." }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 375,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 362,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "aQ1yXK5MgWLKZSGPLe-oT", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ZybejNMMZmtS5pWxKtgiG", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "vJE8YR7WH0K_syA4ZOzdb", "data-ws-component": "Image", src: "/assets/linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 381,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 380,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "gKo9c7lMJ6HBJTM-rHNG4", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "Mxy44fiOBLc7vHcR4M5IY", "data-ws-component": "Text", children: "Emily, Project Lead" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 384,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6_sr5zpGilkGwXfe-it4c", "data-ws-component": "Text", children: "Global Nonprofit Initiative" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 387,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 383,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 379,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 361,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 328,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 261,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 252,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "j2yWzrb47b0pr-JHIBoBp", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "1JJwCx6wkEaht02Ev5L8s", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "wbINRcQA5mR3A4RQfyKKd", "data-ws-component": "Heading", children: "Choose the Perfect Plan for Your Team's Success" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 398,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 397,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "C76iiK0bavOWVLWDt3fdP", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "cKEfbHO_Z62b419KEeDuD", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "-Ns0a4fns6nARAsaY9w-j", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Jn-o7ilBBp7XQ5CTL0i3L", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "rIx2T8qZCYzBESwFnYGl1", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "3thIc18CdC4qfHc0oG3fS", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qJjE-g7_90Hcn5OazMAkz", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hAyuZ-RAWMquhZWZ5XAOJ", "data-ws-component": "Text", children: "Free" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 409,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "j7JHZA1WgR3TlX8kuO1Ww", "data-ws-component": "Heading", children: "Free for everyone" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 412,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 408,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "aKfUglcP9uH-rk1U6VmEw", "data-ws-component": "Separator" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 416,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "flXzm6ByPWPg8IsUQ3bGH", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Ob3zrG9uqaNgp97BRCrMh", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "7eeo4T54Zwgt3tWura-mA", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 419,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "VEDjYSbUNLfs_gw66cRtA", "data-ws-component": "Text", children: "Unlimited members" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 420,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 418,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "u1YblY88u8BpkPEcsxZvY", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "uNMvbM7OJ-ekHeqBKVpP0", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 425,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "cqAGQfqCDRyLI_fqHa5fH", "data-ws-component": "Text", children: "250 issues (unlimited archived)" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 426,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 424,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "X-m8nDACcMhbhNFaf2tZl", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "rkPC2m68n1jyS33GgQXGu", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 431,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "PHgbVAJhS2lQ-jjkQ4FPJ", "data-ws-component": "Text", children: "Import and export" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 432,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 430,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "CYllBijBgetZHdEXD00T5", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "JiCzO1mTWL9p4BfgXOTIM", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 437,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "C-yFbnR4GLrbl9J_fpgsX", "data-ws-component": "Text", children: "Integrations, APIs, webhooks" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 438,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 436,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 417,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 407,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "q9KyCG6eZg_SGof6mtO0P", "data-ws-component": "Link", href: "/pricing", prefetch: "intent", children: "Free" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 444,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 406,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 405,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "RirPNBndJmlwR1n0tNtyW", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qSrcVqlMgZuZQb8lZp6ci", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "bFn8XpRKdwfy79lM24Syb", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "01pRKVtyl1hcAQpQIJ6lj", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "xNlkQ6IeWFEhyjPq58gTv", "data-ws-component": "Text", children: "Standard" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 453,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "2wy_t_EAHh3Lyia7jx2Tw", "data-ws-component": "Heading", children: "$8 per user/month" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 456,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 452,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "iSKIzKb3fv1A-wVodUBgV", "data-ws-component": "Separator" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 460,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "zuhl8Owhn-2uwqEZ_xEYB", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "PhuPRBHe-rI6A1CTWLlnd", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "tHqoib_BIUFE7nvi5B4AD", "data-ws-component": "Text", children: "Everything in Free, plus..." }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 463,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 462,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "n_l9vBuXrMAWvahH1NTEU", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "Pdyl1fng7S006l5xQvjIX", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 468,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6cHYYQ0t02ZW8FwWPnKKF", "data-ws-component": "Text", children: "Unlimited issues and file uploads" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 469,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 467,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EdVywKKrjml9RQRAwIJ1g", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "D6weP7N8AT6j-3NRnZcQO", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 474,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "YpqpFFvAgsMmOTlCNdHbT", "data-ws-component": "Text", children: "Guest accounts, private teams" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 475,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 473,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LuC99KxBaS1cfoASgXDee", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "zoRtbOgN0SVwrBkBRp13U", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 480,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "P6qIWficJXyfkIrvEH5k7", "data-ws-component": "Text", children: "Admin tools" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 481,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 479,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 461,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 451,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "YKPWqa77s9U-6XUNigvTG", "data-ws-component": "Link", href: "/pricing", children: "Standard" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 487,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 450,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 449,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "QCRnRnWDS5lilxAd9Ai_C", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "2xiKzSplG7rNQoT76D0tz", "data-ws-component": "Box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "AuVcBecFSASMvRxU5WdMs", "data-ws-component": "Box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_kIHOdhzPM_Q-xdKDRCIb", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "6twHyszYQvnIAYxfdnKyo", "data-ws-component": "Text", children: "Plus" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 496,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "xAoOWH44wwjOfOObRnXzw", "data-ws-component": "Heading", children: "$14 per user/month" }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 499,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 495,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { "data-ws-id": "MizaMZbMNqwnIsCddIp9N", "data-ws-component": "Separator" }, void 0, false, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 503,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "FSNwRMsds6fK1plSvlygz", "data-ws-component": "Box", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "LMMlDSLfDaGBr-57cwUQS", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "ySdqGrE-RX6osFl60zNdf", "data-ws-component": "Text", children: "Everything in Standard, plus..." }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 506,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 505,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qHT6r5-lnpYs3XTV1Ye6P", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "bjchn2889dazpw9_995WW", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 511,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "XemvmOtK4EeZFWhXP4BEN", "data-ws-component": "Text", children: "SAML / Single Sign On" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 512,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 510,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "9wgH-lbI69o1ioXiNsebJ", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "5UYnbK731H1nAqKFpVpc-", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 517,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "AWAXrmytNYbmnVt0KHhqf", "data-ws-component": "Text", children: "Advanced authentication controls" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 518,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 516,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "nRz8ZHiiklXmDaYfGq834", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "08vFSEeQmjCeSIuqtiE34", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 523,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "vPs9trmbHznVkdVnHEJvL", "data-ws-component": "Text", children: "Linear insights and SLAs" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 524,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 522,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "fjysnt3-EORHjzAdrdvuY", "data-ws-component": "Box", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "LzH861PHwJY52nGb3SGYr", "data-ws-component": "Image", src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 529,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "bSlGiOi5JlBEVdXvEGTxS", "data-ws-component": "Text", children: "Priority support" }, void 0, false, {
                    fileName: "app/__generated__/_index.tsx",
                    lineNumber: 530,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/__generated__/_index.tsx",
                  lineNumber: 528,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/__generated__/_index.tsx",
                lineNumber: 504,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 494,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "D9Ma82venPH1VTWNbgygy", "data-ws-component": "Link", prefetch: "intent", children: "Plus" }, void 0, false, {
              fileName: "app/__generated__/_index.tsx",
              lineNumber: 536,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 493,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 492,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 404,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 403,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 402,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "1msfU4Ntb847TQoTq8mNa", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "hYEZshdNFOd_5N7uuilr_", "data-ws-component": "Text", children: "Discover flexible and affordable options to suit your project management needs" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 545,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "Hu8a8-JZ01633Ah4v7Nwf", "data-ws-component": "Link", prefetch: "intent", children: "Compare our Plans" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 548,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 544,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 396,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "m9IVVvrpGZ5RPVTmDMAgo", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "plbVtYQv9Qnf068n2khIn", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "qkOwk6i2dmRz5aqYBY7y1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "Va1QQAkOmJRW8gUv2-no7", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "data-ws-id": "kZbVTgv73E7AXwKUAD2vy", "data-ws-component": "Heading", children: "Unlock Your Team's Full Potential!" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 557,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "mckX_PoBrpjjDd6I_axNt", "data-ws-component": "Text", children: "Take the first step towards human-centered project management excellence" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 560,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 556,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "yUIliS0D6Myn_k-oBP1Qf", "data-ws-component": "Link", children: "Get started with Free" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 564,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 555,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 554,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 553,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "_NqZ9fD9LqNEc09fvDDd4", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "LXAE0omYOBDRhwHgmjbxd", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_", "data-ws-component": "Box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "T3kf2U4vSUW1jD4y_NEma", "data-ws-component": "Box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "_5z42eLI3fQfzg74Ywbb1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "8_lYbS23oem75lqyneJKk", "data-ws-component": "Link", children: "SaaS Product" }, void 0, false, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 576,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "xJocVo6XEiFAGYZU4WEBy", "data-ws-component": "Text", children: "Company" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 580,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "OemFDMxMz1dQm6ZNizOMu", "data-ws-component": "Link", children: "Team" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 583,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd", "data-ws-component": "Link", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 586,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6", "data-ws-component": "Link", children: "Terms of Service" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 589,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 579,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 575,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "jNyPk4jlM6WQIun_94FT1", "data-ws-component": "Box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dJ3D3qquPPEVbf4FQytOh", "data-ws-component": "Text", children: "Community" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 596,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "KF0zY92pvFsNrmUkiD2iq", "data-ws-component": "Link", children: "Github" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 599,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "k_TUj7O7myu3xDr7wGUNx", "data-ws-component": "Link", children: "Discord" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 602,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "dLWBQCL9gyAllSg5RXwyU", "data-ws-component": "Link", children: "Twitter" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 605,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_", "data-ws-component": "Link", children: "Product Hunt" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 608,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 595,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { "data-ws-id": "EtrG_tdm2KROkPiB9DlEM", "data-ws-component": "Box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "sQd2JlvN3_sraUU2JjqrV", "data-ws-component": "Text", children: "Product" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 613,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_", "data-ws-component": "Link", children: "Pricing" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 616,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "av5H5w4bddISdUjP9Fxl0", "data-ws-component": "Link", children: "Download" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 619,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "CP_4Oip6tvDePQJWy5Pma", "data-ws-component": "Link", children: "Source Code" }, void 0, false, {
            fileName: "app/__generated__/_index.tsx",
            lineNumber: 622,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/__generated__/_index.tsx",
          lineNumber: 612,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 594,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 574,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 573,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 572,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 571,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, { "data-ws-id": "VTKV5TWPZ3G6YydCwzqBh", "data-ws-component": "Slot", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fragment, { "data-ws-id": "TpTp2RjbCtW5ofWZSiagR", "data-ws-component": "Fragment", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "data-ws-id": "UZtdu19rzJ0V6K_-TQfot", "data-ws-component": "Link", href: "https://webstudio.is/", prefetch: "none", target: "_blank", "aria-label": "", rel: "nofollow", rel: "nofollow", rel: "nofollow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { "data-ws-id": "xP5kvTqG1Ud1udrWZC0cD", "data-ws-component": "Image", src: "/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg", alt: "", loading: "eager", "aria-hidden": true }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 634,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { "data-ws-id": "dt6LFeOnmEKrCnCGPuGeB", "data-ws-component": "Text", children: "Built with Webstudio" }, void 0, false, {
        fileName: "app/__generated__/_index.tsx",
        lineNumber: 635,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 633,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 632,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/__generated__/_index.tsx",
      lineNumber: 631,
      columnNumber: 5
    }, this),
    props.scripts
  ] }, void 0, true, {
    fileName: "app/__generated__/_index.tsx",
    lineNumber: 71,
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

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
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
      fileName: "app/routes/_index.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 157,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
};
_c2 = Outlet;
var index_default = Outlet;
var _c2;
$RefreshReg$(_c2, "Outlet");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-63JN6HXM.js.map
