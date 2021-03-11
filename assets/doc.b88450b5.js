import{c as t,f as e,t as d,A as n,o}from"./vendor.235e43af.js";const a={class:"markdown-body"},r=n('<h1>range组件</h1><h3>介绍</h3><p>滑动输入条，用于在给定的范围内选择一个值。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Range } from &#39;@nutui/nutui&#39;;\nconst app = createApp();\napp.use(Range);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\nimport { Toast } from &#39;@nutui/nutui&#39;;\n\nexport default {\n  setup() {\n    const value = ref(40);\n    const onChange = (value) =&gt; Toast.text(&#39;当前值：&#39; + value);\n    return {\n      value,\n      onChange,\n    };\n  },\n};\n</code></pre><h3>双滑块</h3><pre><code class="language-html">&lt;nut-range range v-model=&quot;value&quot; @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\nimport { Toast } from &#39;@nutui/nutui&#39;;\n\nexport default {\n  setup() {\n    const value = ref([20, 80]);\n    const onChange = (value) =&gt; Toast.text(&#39;当前值：&#39; + value);\n    return {\n      value,\n      onChange,\n    };\n  },\n};\n</code></pre><h3>指定范围</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; :max=&quot;10&quot; :min=&quot;-10&quot; @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><h3>设置步长</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; :step=&quot;5&quot; @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><h3>隐藏范围</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; hidden-range @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><h3>隐藏标签</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; hidden-tag @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><h3>禁用</h3><pre><code class="language-html">&lt;nut-range v-model=&quot;value&quot; disabled @change=&quot;onChange&quot;&gt;&lt;/nut-range&gt;\n</code></pre><h3>自定义样式</h3><pre><code class="language-html">&lt;nut-range\n  v-model=&quot;value&quot;\n  inactive-color=&quot;rgba(163,184,255,1)&quot;\n  button-color=&quot;rgba(52,96,250,1)&quot;\n  active-color=&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%&quot;\n  @change=&quot;onChange&quot;&gt;\n&lt;/nut-range&gt;\n</code></pre><h3>自定义按钮</h3>',25),u={class:"language-html"},l=n("<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前进度百分比</td><td><em>number | number[]</em></td><td><code>0</code></td></tr><tr><td>range</td><td>是否开启双滑块模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>最大值</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>min</td><td>最小值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>step</td><td>步长</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>disabled</td><td>是否禁用滑块</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hidden-range</td><td>是否隐藏范围值</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hidden-tag</td><td>是否隐藏标签</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>active-color</td><td>进度条激活态颜色</td><td><em>string</em></td><td><code>rgba(250, 44, 25, 1)</code></td></tr><tr><td>inactive-color</td><td>进度条非激活态颜色</td><td><em>string</em></td><td><code>rgba(255, 163, 154, 1)</code></td></tr><tr><td>button-color</td><td>按钮颜色</td><td><em>string</em></td><td><code>rgba(250, 44, 25, 1)</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:model-value</td><td>进度变化时实时触发</td><td>value: 当前进度</td></tr><tr><td>change</td><td>进度变化且结束拖动后触发</td><td>value: 当前进度</td></tr><tr><td>drag-start</td><td>开始拖动时触发</td><td>-</td></tr><tr><td>drag-end</td><td>结束拖动时触发</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>button</td><td>自定义滑动按钮</td></tr></tbody></table>",7),g={expose:[],setup:n=>(n,g)=>(o(),t("div",a,[r,e("pre",null,[e("code",u,'<nut-range v-model="value" @change="onChange">\n  <template #button>\n    <div class="custom-button">'+d(n.value)+"</div>\n  </template>\n</nut-range>\n\n<style>\n  .custom-button {\n    width: 26px;\n    color: #fff;\n    font-size: 10px;\n    line-height: 18px;\n    text-align: center;\n    background-color: #ee0a24;\n    border-radius: 100px;\n  }\n</style>\n",1)]),l]))};export default g;
