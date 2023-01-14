(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './.storybook/preview.js-generated-config-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptors.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
      var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js'),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return Object(ClientApi.d)(value);
          case 'argTypes':
            return Object(ClientApi.b)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer);
            });
          case 'render':
            return Object(ClientApi.i)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.h)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './generated-stories-entry.js': function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js').configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$',
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$',
            ),
          ],
          module,
          !1,
        );
      }).call(this, __webpack_require__('./node_modules/webpack/buildin/module.js')(module));
    },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './stories/Button.stories.tsx': './src/stories/Button.stories.tsx',
          './stories/CardCarousel.stories.tsx': './src/stories/CardCarousel.stories.tsx',
          './stories/RoundButton.stories.tsx': './src/stories/RoundButton.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$');
      },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$');
      },
    './src/assets/img_person_1.png': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/img_person_1.e1b942c6.png';
    },
    './src/assets/img_person_2.png': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/img_person_2.375473be.png';
    },
    './src/assets/img_person_3.png': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/img_person_3.d4503c81.png';
    },
    './src/stories/Button.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        }),
        __webpack_require__.d(__webpack_exports__, 'Disabled', function () {
          return Disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithIconAndSizesConfigure', function () {
          return WithIconAndSizesConfigure;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/react/index.js');
      var index_esm = __webpack_require__('./node_modules/react-icons/bs/index.esm.js'),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        theme = __webpack_require__('./src/theme.ts'),
        ButtonWrapper =
          (__webpack_require__('./node_modules/@fontsource/manrope/index.css'),
          styled_components_browser_esm.b.div.withConfig({
            displayName: 'styled__ButtonWrapper',
            componentId: 'sc-1y9yrzv-0',
          })(
            [
              'box-sizing:border-box;padding:0 5px;width:',
              'px;height:',
              'px;border-radius:',
              'px;background-color:',
              ';display:flex;flex-direction:row;justify-content:center;align-items:center;gap:',
              'px;color:',
              ';cursor:',
              ';transition:',
              ';box-shadow:',
              ';&:hover{background-color:',
              ';}&:active{box-shadow:',
              ';background-color:',
              ';}',
            ],
            function (_ref) {
              return _ref.width;
            },
            function (_ref2) {
              return _ref2.height;
            },
            function (_ref3) {
              return _ref3.theme.borderRadius[6];
            },
            function (_ref4) {
              var theme = _ref4.theme;
              return _ref4.disabled ? theme.colors.grey : theme.colors.primary;
            },
            function (_ref5) {
              return _ref5.theme.gap[10];
            },
            function (_ref6) {
              return _ref6.theme.colors.white;
            },
            function (_ref7) {
              return _ref7.disabled ? 'not-allowed' : 'pointer';
            },
            function (_ref8) {
              return _ref8.theme.transition;
            },
            function (_ref9) {
              var theme = _ref9.theme;
              return _ref9.disabled ? 'none' : theme.shadows.button;
            },
            function (_ref10) {
              var theme = _ref10.theme;
              return !_ref10.disabled && theme.colors.hoverBlue;
            },
            function (_ref11) {
              return !_ref11.disabled && 'none';
            },
            function (_ref12) {
              var theme = _ref12.theme;
              return !_ref12.disabled && theme.colors.primary;
            },
          )),
        ButtonText = styled_components_browser_esm.b.p.withConfig({
          displayName: 'styled__ButtonText',
          componentId: 'sc-1y9yrzv-1',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;overflow:hidden;'],
          function (_ref13) {
            return _ref13.theme.fontFamily.Manrope;
          },
          function (_ref14) {
            var theme = _ref14.theme,
              fontWeight = _ref14.fontWeight;
            return fontWeight || theme.fontWeight[700];
          },
          function (_ref15) {
            var theme = _ref15.theme,
              fontSize = _ref15.fontSize;
            return fontSize || theme.fontSize[16];
          },
          function (_ref16) {
            return _ref16.theme.lineHeight[24];
          },
        ),
        Icon = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__Icon',
          componentId: 'sc-1y9yrzv-2',
        })(['display:flex;align-items:center;svg{margin:0;width:24px;height:24px;}']),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['width', 'height', 'text', 'disabled', 'onClick'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Button_Button = function Button(_ref) {
        var _ref$width = _ref.width,
          width = void 0 === _ref$width ? 200 : _ref$width,
          _ref$height = _ref.height,
          height = void 0 === _ref$height ? 60 : _ref$height,
          _ref$text = _ref.text,
          text = void 0 === _ref$text ? 'Button text' : _ref$text,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          onClick = _ref.onClick,
          rest = _objectWithoutProperties(_ref, _excluded),
          icon = rest.icon,
          fontSize = rest.fontSize,
          fontWeight = rest.fontWeight;
        return Object(jsx_runtime.jsx)(styled_components_browser_esm.a, {
          theme: theme.a,
          children: Object(jsx_runtime.jsxs)(ButtonWrapper, {
            width: width,
            height: height,
            onClick: disabled ? void 0 : onClick,
            disabled: disabled,
            icon: icon || null,
            children: [
              icon && Object(jsx_runtime.jsx)(Icon, { children: icon }),
              Object(jsx_runtime.jsx)(ButtonText, {
                fontSize: fontSize && fontSize,
                fontWeight: fontWeight && fontWeight,
                children: text,
              }),
            ],
          }),
        });
      };
      Button_Button.displayName = 'Button';
      try {
        (Button_Button.displayName = 'Button'),
          (Button_Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              width: {
                defaultValue: { value: '200' },
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'number' },
              },
              height: {
                defaultValue: { value: '60' },
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'number' },
              },
              text: {
                defaultValue: { value: 'Button text' },
                description: '',
                name: 'text',
                required: !1,
                type: { name: 'string' },
              },
              icon: { defaultValue: null, description: '', name: 'icon', required: !1, type: { name: 'Element' } },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => {}' },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !0,
                type: { name: 'number' },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Button/index.tsx#Button'] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: 'Button',
              path: 'src/components/Button/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'Button',
        component: Button_Button,
        argTypes: { disabled: { control: 'boolean' }, icon: { control: 'none' } },
        args: { text: 'Button text', width: 200, height: 60 },
      };
      var Button_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(Button_Button, Object.assign({}, args));
      };
      Button_stories_Template.displayName = 'Template';
      var Basic = Button_stories_Template.bind({}),
        Disabled = Button_stories_Template.bind({});
      Disabled.args = { disabled: !0 };
      var WithIconAndSizesConfigure = Button_stories_Template.bind({});
      (WithIconAndSizesConfigure.args = {
        text: 'Watch the demo',
        icon: Object(jsx_runtime.jsx)(index_esm.a, {}),
        width: 168,
        height: 46,
        fontSize: 14,
        fontWeight: 600,
      }),
        (Basic.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Basic.parameters,
        )),
        (Disabled.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Disabled.parameters,
        )),
        (WithIconAndSizesConfigure.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          WithIconAndSizesConfigure.parameters,
        ));
    },
    './src/stories/CardCarousel.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js');
      var react = __webpack_require__('./node_modules/react/index.js'),
        img_person_1 = __webpack_require__('./src/assets/img_person_1.png'),
        img_person_1_default = __webpack_require__.n(img_person_1),
        img_person_2 = __webpack_require__('./src/assets/img_person_2.png'),
        img_person_2_default = __webpack_require__.n(img_person_2),
        img_person_3 = __webpack_require__('./src/assets/img_person_3.png'),
        img_person_3_default = __webpack_require__.n(img_person_3),
        testimonailsCards = [
          {
            name: 'Alex Bern',
            position: 'CEO by PixelPerfect',
            image: img_person_1_default.a,
            comment:
              '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Ruben Chifundo',
            position: 'CEO by NOX',
            image: img_person_2_default.a,
            comment:
              '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Tigran Nazaret',
            position: 'Data analyst',
            image: img_person_3_default.a,
            comment:
              '“Ut enim ad minima veniam, quis nostrum exercitationem ullam nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Arnold Sad',
            position: 'CEO by PixelPerfect',
            image: img_person_1_default.a,
            comment:
              '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Tom Weak',
            position: 'CEO by PixelPerfect',
            image: img_person_2_default.a,
            comment:
              '“Ut enim ad minima veniam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Sebastian Smile',
            position: 'CEO by PixelPerfect',
            image: img_person_3_default.a,
            comment:
              '“Ut enim ad minima veniam, quis commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Christian Freeze',
            position: 'CEO by PixelPerfect',
            image: img_person_1_default.a,
            comment:
              '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
          {
            name: 'Jhon Sleep',
            position: 'CEO by PixelPerfect',
            image: img_person_2_default.a,
            comment:
              '“Ut enim ad minima veniam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
          },
        ],
        index_esm =
          (__webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('./node_modules/react-icons/hi/index.esm.js')),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        hooks_useScroll = function useScroll() {
          var carousel = null,
            card = null;
          Object(react.useEffect)(function () {
            (carousel = document.querySelector('.carousel')), (card = document.querySelector('.card'));
          }, []);
          return {
            leftClickHandler: function leftClickHandler() {
              carousel.scrollLeft -= card.clientWidth + 30;
            },
            rightClickHandler: function rightClickHandler() {
              carousel.scrollLeft += card.clientWidth + 30;
            },
          };
        },
        theme = __webpack_require__('./src/theme.ts'),
        TitleAndControls =
          (__webpack_require__('./node_modules/@fontsource/manrope/index.css'),
          __webpack_require__('./node_modules/@fontsource/open-sans/index.css'),
          styled_components_browser_esm.b.div.withConfig({
            displayName: 'styled__TitleAndControls',
            componentId: 'sc-1lpcb2g-0',
          })(
            ['display:flex;justify-content:space-between;align-items:center;margin-bottom:', 'px;padding-left:', 'px;'],
            function (_ref) {
              return _ref.theme.margin[50];
            },
            function (_ref2) {
              return _ref2.theme.padding[10];
            },
          )),
        Title = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__Title',
          componentId: 'sc-1lpcb2g-1',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;'],
          function (_ref3) {
            return _ref3.theme.fontFamily.Manrope;
          },
          function (_ref4) {
            return _ref4.theme.fontWeight[800];
          },
          function (_ref5) {
            return _ref5.theme.fontSize[38];
          },
          function (_ref6) {
            return _ref6.theme.lineHeight[56];
          },
        ),
        Controls = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__Controls',
          componentId: 'sc-1lpcb2g-2',
        })(
          ['display:flex;justify-content:space-between;align-items:center;height:', 'px;gap:', 'px;'],
          function (_ref7) {
            return _ref7.theme.height[60];
          },
          function (_ref8) {
            return _ref8.theme.gap[15];
          },
        ),
        ControlButton = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__ControlButton',
          componentId: 'sc-1lpcb2g-3',
        })(
          [
            'width:inherit;height:inherit;display:flex;align-items:center;justify-content:center;background:',
            ';border-radius:',
            'px;cursor:pointer;transition:',
            ';&:hover{transform:',
            ';}svg{width:inherit;font-size:',
            'px;color:',
            ';}',
          ],
          function (_ref9) {
            return _ref9.theme.colors.tertiary;
          },
          function (_ref10) {
            return _ref10.theme.borderRadius[20];
          },
          function (_ref11) {
            return _ref11.theme.transition;
          },
          function (_ref12) {
            return 'scale(' + _ref12.theme.scale.xs + ')';
          },
          function (_ref13) {
            return _ref13.theme.fontSize[25];
          },
          function (_ref14) {
            return _ref14.theme.colors.secondary;
          },
        ),
        Cards = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__Cards',
          componentId: 'sc-1lpcb2g-4',
        })(
          [
            'width:inherit;height:',
            'px;display:flex;flex-direction:row;align-items:stretch;padding:0px;gap:',
            'px;padding:',
            'px;overflow-x:scroll;scroll-behavior:smooth;scrollbar-width:none;&::-webkit-scrollbar{display:none;}',
          ],
          function (_ref15) {
            return _ref15.theme.height[370];
          },
          function (_ref16) {
            return _ref16.theme.gap[30];
          },
          function (_ref17) {
            return _ref17.theme.padding[10];
          },
        ),
        Card = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__Card',
          componentId: 'sc-1lpcb2g-5',
        })(
          [
            'display:flex;flex-direction:column;align-items:flex-start;padding:',
            'px;gap:',
            'px;width:',
            'px;box-shadow:',
            ';background-color:',
            ';flex-basis:',
            '%;flex-shrink:0;',
          ],
          function (_ref18) {
            return _ref18.theme.padding[35];
          },
          function (_ref19) {
            return _ref19.theme.gap[25];
          },
          function (_ref20) {
            return _ref20.theme.width[350];
          },
          function (_ref21) {
            return _ref21.theme.shadows.card3;
          },
          function (_ref22) {
            return _ref22.theme.colors.white;
          },
          function (_ref23) {
            return _ref23.theme.flexBasis[25];
          },
        ),
        CardImage = styled_components_browser_esm.b.img.withConfig({
          displayName: 'styled__CardImage',
          componentId: 'sc-1lpcb2g-6',
        })(
          ['width:', 'px;height:', 'px;border-radius:', '%;overflow:hidden;'],
          function (_ref24) {
            return _ref24.theme.width[80];
          },
          function (_ref25) {
            return _ref25.theme.height[80];
          },
          function (_ref26) {
            return _ref26.theme.borderRadius[100];
          },
        ),
        CardName = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__CardName',
          componentId: 'sc-1lpcb2g-7',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;'],
          function (_ref27) {
            return _ref27.theme.fontFamily.Manrope;
          },
          function (_ref28) {
            return _ref28.theme.fontWeight[700];
          },
          function (_ref29) {
            return _ref29.theme.fontSize[16];
          },
          function (_ref30) {
            return _ref30.theme.lineHeight[24];
          },
        ),
        CardPosition = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__CardPosition',
          componentId: 'sc-1lpcb2g-8',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;'],
          function (_ref31) {
            return _ref31.theme.fontFamily.Manrope;
          },
          function (_ref32) {
            return _ref32.theme.fontWeight[500];
          },
          function (_ref33) {
            return _ref33.theme.fontSize[14];
          },
          function (_ref34) {
            return _ref34.theme.lineHeight[24];
          },
        ),
        CardComment = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__CardComment',
          componentId: 'sc-1lpcb2g-9',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;color:', ';'],
          function (_ref35) {
            return _ref35.theme.fontFamily.OpenSans;
          },
          function (_ref36) {
            return _ref36.theme.fontWeight[400];
          },
          function (_ref37) {
            return _ref37.theme.fontSize[16];
          },
          function (_ref38) {
            return _ref38.theme.lineHeight[28];
          },
          function (_ref39) {
            return _ref39.theme.colors.grey;
          },
        ),
        CardHeader = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__CardHeader',
          componentId: 'sc-1lpcb2g-10',
        })(['display:flex;flex-direction:row;align-items:center;gap:', 'px;'], function (_ref40) {
          return _ref40.theme.gap[25];
        }),
        CardNameAndPosition = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__CardNameAndPosition',
          componentId: 'sc-1lpcb2g-11',
        })(['display:flex;flex-direction:column;align-items:flex-start;']),
        ControlButtonRight = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__ControlButtonRight',
          componentId: 'sc-1lpcb2g-12',
        })(['width:', 'px;height:inherit;'], function (_ref41) {
          return _ref41.theme.width[110];
        }),
        ControlButtonLeft = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__ControlButtonLeft',
          componentId: 'sc-1lpcb2g-13',
        })(['width:', 'px;height:inherit;'], function (_ref42) {
          return _ref42.theme.width[110];
        }),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        CardCarousel_CardCarousel = function CardCarousel(_ref) {
          var title = _ref.title,
            cards = _ref.cards,
            _useScroll = hooks_useScroll(),
            leftClickHandler = _useScroll.leftClickHandler,
            rightClickHandler = _useScroll.rightClickHandler;
          return Object(jsx_runtime.jsxs)(styled_components_browser_esm.a, {
            theme: theme.a,
            children: [
              Object(jsx_runtime.jsxs)(TitleAndControls, {
                children: [
                  Object(jsx_runtime.jsx)(Title, { children: title }),
                  Object(jsx_runtime.jsxs)(Controls, {
                    children: [
                      Object(jsx_runtime.jsx)(ControlButtonLeft, {
                        onClick: leftClickHandler,
                        children: Object(jsx_runtime.jsx)(ControlButton, {
                          children: Object(jsx_runtime.jsx)(index_esm.a, {}),
                        }),
                      }),
                      Object(jsx_runtime.jsx)(ControlButtonRight, {
                        onClick: rightClickHandler,
                        children: Object(jsx_runtime.jsx)(ControlButton, {
                          children: Object(jsx_runtime.jsx)(index_esm.b, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(jsx_runtime.jsx)(Cards, {
                className: 'carousel',
                children: cards.map(function (cardItem, index) {
                  return Object(jsx_runtime.jsxs)(
                    Card,
                    {
                      className: 'card',
                      children: [
                        Object(jsx_runtime.jsxs)(CardHeader, {
                          children: [
                            Object(jsx_runtime.jsx)(CardImage, { src: cardItem.image }),
                            Object(jsx_runtime.jsxs)(CardNameAndPosition, {
                              children: [
                                Object(jsx_runtime.jsx)(CardName, { children: cardItem.name }),
                                Object(jsx_runtime.jsx)(CardPosition, { children: cardItem.position }),
                              ],
                            }),
                          ],
                        }),
                        Object(jsx_runtime.jsx)(CardComment, { children: cardItem.comment }),
                      ],
                    },
                    index,
                  );
                }),
              }),
            ],
          });
        };
      CardCarousel_CardCarousel.displayName = 'CardCarousel';
      var components_CardCarousel = CardCarousel_CardCarousel;
      try {
        (CardCarousel_CardCarousel.displayName = 'CardCarousel'),
          (CardCarousel_CardCarousel.__docgenInfo = {
            description: '',
            displayName: 'CardCarousel',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string | undefined' },
              },
              cards: { defaultValue: null, description: '', name: 'cards', required: !0, type: { name: 'ICard[]' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/CardCarousel/index.tsx#CardCarousel'] = {
              docgenInfo: CardCarousel_CardCarousel.__docgenInfo,
              name: 'CardCarousel',
              path: 'src/components/CardCarousel/index.tsx#CardCarousel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'CardCarousel',
        component: components_CardCarousel,
        argTypes: {},
        args: { cards: testimonailsCards },
      };
      var CardCarousel_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(components_CardCarousel, Object.assign({}, args));
      };
      CardCarousel_stories_Template.displayName = 'Template';
      var Basic = CardCarousel_stories_Template.bind({});
      (Basic.args = { title: 'Testimonials' }),
        (Basic.parameters = Object.assign(
          { storySource: { source: '(args) => (\r\n  <CardCarousel {...args} />\r\n)' } },
          Basic.parameters,
        ));
    },
    './src/stories/RoundButton.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        }),
        __webpack_require__.d(__webpack_exports__, 'Disabled', function () {
          return Disabled;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        theme = __webpack_require__('./src/theme.ts'),
        ButtonWrapper =
          (__webpack_require__('./node_modules/@fontsource/manrope/index.css'),
          styled_components_browser_esm.b.div.withConfig({
            displayName: 'styled__ButtonWrapper',
            componentId: 'sc-9xh6pz-0',
          })(
            [
              'box-sizing:border-box;padding:0 5px;width:',
              'px;height:',
              'px;border-radius:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:',
              ';border:1px solid rgba(255,255,255,0.4);background-color:transparent;',
            ],
            function (_ref) {
              return _ref.width;
            },
            function (_ref2) {
              return _ref2.height;
            },
            function (_ref3) {
              return _ref3.theme.colors.white;
            },
          )),
        ButtonText = styled_components_browser_esm.b.p.withConfig({
          displayName: 'styled__ButtonText',
          componentId: 'sc-9xh6pz-1',
        })(
          ['font-family:', ';font-weight:', ';font-size:', 'px;line-height:', 'px;overflow:hidden;'],
          function (_ref4) {
            return _ref4.theme.fontFamily.Manrope;
          },
          function (_ref5) {
            var theme = _ref5.theme,
              fontWeight = _ref5.fontWeight;
            return fontWeight || theme.fontWeight[700];
          },
          function (_ref6) {
            var theme = _ref6.theme,
              fontSize = _ref6.fontSize;
            return fontSize || theme.fontSize[16];
          },
          function (_ref7) {
            return _ref7.theme.lineHeight[24];
          },
        ),
        ButtonContainer = styled_components_browser_esm.b.div.withConfig({
          displayName: 'styled__ButtonContainer',
          componentId: 'sc-9xh6pz-2',
        })(
          [
            'display:flex;align-items:center;justify-content:center;width:',
            'px;height:',
            'px;border-radius:100%;background-color:',
            ';cursor:',
            ';&:hover{background-color:',
            ';}&:active{background-color:',
            ';}border:',
            'px solid ',
            ';',
          ],
          function (_ref8) {
            return _ref8.width;
          },
          function (_ref9) {
            return _ref9.height;
          },
          function (_ref10) {
            var theme = _ref10.theme;
            return _ref10.disabled ? theme.colors.grey : theme.colors.primary;
          },
          function (_ref11) {
            return _ref11.disabled ? 'not-allowed' : 'pointer';
          },
          function (_ref12) {
            var theme = _ref12.theme;
            return !_ref12.disabled && theme.colors.hoverBlue;
          },
          function (_ref13) {
            var theme = _ref13.theme;
            return !_ref13.disabled && theme.colors.primary;
          },
          function (_ref14) {
            return 0.08 * _ref14.width;
          },
          function (_ref15) {
            return _ref15.theme.colors.white;
          },
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['size', 'text', 'disabled', 'onClick'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var RoundButton_RoundButton = function RoundButton(_ref) {
        var _ref$size = _ref.size,
          size = void 0 === _ref$size ? 200 : _ref$size,
          _ref$text = _ref.text,
          text = void 0 === _ref$text ? 'Button text' : _ref$text,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          onClick = _ref.onClick,
          rest = _objectWithoutProperties(_ref, _excluded),
          fontSize = rest.fontSize,
          fontWeight = rest.fontWeight;
        return Object(jsx_runtime.jsx)(styled_components_browser_esm.a, {
          theme: theme.a,
          children: Object(jsx_runtime.jsx)(ButtonContainer, {
            width: size,
            height: size,
            disabled: disabled,
            children: Object(jsx_runtime.jsx)(ButtonWrapper, {
              width: size - 0.15 * size,
              height: size - 0.15 * size,
              onClick: disabled ? void 0 : onClick,
              disabled: disabled,
              children: Object(jsx_runtime.jsx)(ButtonText, {
                fontSize: fontSize && fontSize,
                fontWeight: fontWeight && fontWeight,
                children: text,
              }),
            }),
          }),
        });
      };
      RoundButton_RoundButton.displayName = 'RoundButton';
      try {
        (RoundButton_RoundButton.displayName = 'RoundButton'),
          (RoundButton_RoundButton.__docgenInfo = {
            description: '',
            displayName: 'RoundButton',
            props: {
              size: {
                defaultValue: { value: '200' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'number' },
              },
              text: {
                defaultValue: { value: 'Button text' },
                description: '',
                name: 'text',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => {}' },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !0,
                type: { name: 'number' },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/RoundButton/index.tsx#RoundButton'] = {
              docgenInfo: RoundButton_RoundButton.__docgenInfo,
              name: 'RoundButton',
              path: 'src/components/RoundButton/index.tsx#RoundButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'RoundButton',
        component: RoundButton_RoundButton,
        argTypes: { disabled: { control: 'boolean' } },
        args: { text: 'Button text', size: 200 },
      };
      var RoundButton_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(RoundButton_RoundButton, Object.assign({}, args));
      };
      RoundButton_stories_Template.displayName = 'Template';
      var Basic = RoundButton_stories_Template.bind({});
      Basic.args = { text: 'Learn more', size: 120, fontSize: 14, fontWeight: 600 };
      var Disabled = RoundButton_stories_Template.bind({});
      (Disabled.args = { disabled: !0, text: 'Learn more', size: 120, fontSize: 14, fontWeight: 600 }),
        (Basic.parameters = Object.assign(
          { storySource: { source: '(args) => (\r\n  <RoundButton {...args} />\r\n)' } },
          Basic.parameters,
        )),
        (Disabled.parameters = Object.assign(
          { storySource: { source: '(args) => (\r\n  <RoundButton {...args} />\r\n)' } },
          Disabled.parameters,
        ));
    },
    './src/theme.ts': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var theme = {
        width: { 80: 80, 110: 110, 141: 141, 185: 185, 350: 350, 540: 540, 930: 930, 1110: 1110, 1920: 1920 },
        height: {
          46: 46,
          54: 54,
          60: 60,
          80: 80,
          120: 120,
          126: 126,
          132: 132,
          370: 370,
          580: 580,
          590: 590,
          740: 740,
        },
        fontFamily: { Manrope: "'Manrope', sans-serif", OpenSans: "'Open Sans', sans-serif" },
        fontSize: { 14: 14, 16: 16, 20: 20, 22: 22, 25: 25, 30: 30, 38: 38, 46: 46, 50: 50, 57: 57 },
        fontWeight: { 400: 400, 500: 500, 600: 600, 700: 700, 800: 800 },
        gap: { 10: 10, 15: 15, 25: 25, 30: 30, 40: 40, 46: 46, 50: 50 },
        lineHeight: { 24: 24, 28: 28, 33: 33, 56: 56, 60: 60, 66: 66 },
        margin: { 30: 30, 50: 50, 75: 75, 80: 80, 90: 90, 120: 120 },
        padding: { 10: 10, 25: 25, 35: 35 },
        borderRadius: { 6: 6, 20: 20, 100: 100 },
        scale: { xs: 1.1 },
        flexBasis: { 25: 25 },
        transition: 'all 0.2s linear',
        colors: {
          primary: '#185CFF',
          secondary: '#002B4E',
          tertiary: '#F0F9FF',
          helperBlue1: '#194060',
          helperBlue2: '#607D94',
          helperBlue3: '#C9DCEC',
          black: '#292D33',
          grey: '#9497A1',
          background: '#F1F6FA',
          red: '#C14040',
          white: '#FFFFFF',
          hoverBlue: '#467DFF',
        },
        shadows: {
          button: '0px 12px 30px rgba(24, 92, 255, 0.18)',
          card1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
          card2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
          card3: '0px 4px 12px rgba(12, 68, 204, 0.1)',
          dropdown: '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
        },
      };
      __webpack_exports__.a = theme;
    },
    './storybook-init-framework-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js');
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
        __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__('./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js'),
        __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);
