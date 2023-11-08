/*! For license information please see stories-AntdNumberPicker-stories.d3e01a91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_culur_antd_number_picker=self.webpackChunk_culur_antd_number_picker||[]).push([[145],{"./src/stories/AntdNumberPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standalone:()=>Standalone,WithForm:()=>WithForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AntdNumberPicker_stories});var es_form=__webpack_require__("./node_modules/antd/es/form/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),theme=__webpack_require__("./node_modules/antd/es/theme/index.js"),config_provider=__webpack_require__("./node_modules/antd/es/config-provider/index.js"),divider=__webpack_require__("./node_modules/antd/es/divider/index.js"),popover=__webpack_require__("./node_modules/antd/es/popover/index.js"),input_number=__webpack_require__("./node_modules/antd/es/input-number/index.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{useToken}=theme.default;function AntdNumberPicker(props){const numberPickerRows=props.rows??7,numberPickerCols=props.cols??7,placement=props.placement??"bottomLeft",trigger=props.trigger??"click",readOnly=props.readOnly??!1,propsValue=(0,react.useMemo)((()=>props.value??null),[props.value]),className=props.className??void 0,{theme,token}=useToken();(0,es.xy)({token,theme,path:["ant-number-picker"]},(()=>({".ant-number-picker":{"&-prev-icon,\n          &-next-icon,\n          &-super-prev-icon,\n          &-super-next-icon":{position:"relative",display:"inline-block",width:7,height:7,"&::before":{position:"absolute",top:0,insetInlineStart:0,display:"inline-block",width:7,height:7,border:"0 solid currentcolor",borderBlockStartWidth:1,borderBlockEndWidth:0,borderInlineStartWidth:1,borderInlineEndWidth:0,content:'""'}},"&-super-prev-icon,\n          &-super-next-icon":{"&::after":{position:"absolute",top:Math.ceil(3.5),insetInlineStart:Math.ceil(3.5),display:"inline-block",width:7,height:7,border:"0 solid currentcolor",borderBlockStartWidth:1,borderBlockEndWidth:0,borderInlineStartWidth:1,borderInlineEndWidth:0,content:'""'}},"&-prev-icon,\n          &-super-prev-icon":{transform:"rotate(-45deg)"},"&-next-icon,\n          &-super-next-icon":{transform:"rotate(135deg)"}},".ant-number-picker-popover":{".ant-btn":{display:"flex",justifyContent:"center",alignItems:"center",padding:"4px 0","&":{width:"32px"},"&.ant-btn-sm":{width:"24px"},"&.ant-btn-lg":{width:"40px"},".ant-number-picker":{"&-prev-icon":{marginLeft:"2px"},"&-next-icon":{marginRight:"2px"},"&-super-prev-icon":{marginRight:"2px"},"&-super-next-icon":{marginLeft:"2px"}}},".ant-popover-inner":{padding:"8px"}},".ant-number-picker-grid":{display:"grid",gap:"0.25rem",justifyContent:"flex-start",alignItems:"center"}})));const[open,setOpen]=(0,react.useState)(!1),[value,setValue]=(0,react.useState)(propsValue),numbers=(0,react.useMemo)((()=>Array.from({length:props.max-props.min+1},((_,i)=>i+props.min))),[props.max,props.min]),[pageNumber,setPageNumber]=(0,react.useState)(1),paginatedData=((array,pageNumber,pageSize)=>{const paginatedArray=(0,react.useMemo)((()=>array.slice((pageNumber-1)*pageSize,pageNumber*pageSize)),[array,pageNumber,pageSize]),{length}=array,remainder=length%pageSize;return{totalPage:(length-remainder)/pageSize+(remainder>0?1:0),array:paginatedArray,first:paginatedArray[0],last:paginatedArray[paginatedArray.length-1]}})(numbers,pageNumber,numberPickerRows*numberPickerCols),onChange=valueNumber=>{setValue(valueNumber),props.onChange?.(valueNumber)};(0,react.useEffect)((()=>{setValue(propsValue)}),[propsValue]);const content=(0,react.useMemo)((()=>{const gridTemplateColumns=Math.min(props.max-props.min+1,numberPickerCols);return(0,jsx_runtime.jsxs)("div",{className:"ant-number-picker-grid",style:{gridTemplateColumns:`repeat(${gridTemplateColumns}, 1fr)`},children:[(0,jsx_runtime.jsx)(es_button.ZP,{type:"text",disabled:1===pageNumber,onClick:()=>setPageNumber(1),children:(0,jsx_runtime.jsx)("span",{className:"ant-number-picker-super-prev-icon"})}),(0,jsx_runtime.jsx)(es_button.ZP,{type:"text",disabled:1===pageNumber,onClick:()=>setPageNumber((pageNumber_=>pageNumber_-1)),children:(0,jsx_runtime.jsx)("span",{className:"ant-number-picker-prev-icon"})}),(0,jsx_runtime.jsxs)("div",{style:{flex:1,textAlign:"center",fontWeight:"bold",gridColumn:`span ${gridTemplateColumns-4} / span ${gridTemplateColumns-4}`},children:[paginatedData.first,"-",paginatedData.last]}),(0,jsx_runtime.jsx)(es_button.ZP,{type:"text",disabled:pageNumber===paginatedData.totalPage,onClick:()=>setPageNumber((pageNumber_=>pageNumber_+1)),children:(0,jsx_runtime.jsx)("span",{className:"ant-number-picker-next-icon"})}),(0,jsx_runtime.jsx)(es_button.ZP,{type:"text",disabled:pageNumber===paginatedData.totalPage,onClick:()=>setPageNumber(paginatedData.totalPage),children:(0,jsx_runtime.jsx)("span",{className:"ant-number-picker-super-next-icon"})}),(0,jsx_runtime.jsx)(config_provider.ZP,{theme:{token:{marginLG:2}},children:(0,jsx_runtime.jsx)(divider.Z,{style:{gridColumn:`span ${gridTemplateColumns} / span ${gridTemplateColumns}`}})}),paginatedData.array.map((num=>(0,jsx_runtime.jsx)(es_button.ZP,{type:props.value===num?"primary":"text",onClick:()=>{setOpen(!1),onChange(num)},children:num},num)))]})}),[props.min,props.max,paginatedData,numberPickerCols,pageNumber,open]);return(0,jsx_runtime.jsx)(popover.Z,{content,arrow:!1,placement,overlayClassName:"ant-number-picker-popover",open,onOpenChange:setOpen,trigger,children:(0,jsx_runtime.jsx)(input_number.Z,{className,readOnly,min:props.min,max:props.max,value,onChange})})}AntdNumberPicker.displayName="AntdNumberPicker";try{AntdNumberPicker.displayName="AntdNumberPicker",AntdNumberPicker.__docgenInfo={description:"",displayName:"AntdNumberPicker",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"ActionType | ActionType[]"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number | null) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AntdNumberPicker.tsx#AntdNumberPicker"]={docgenInfo:AntdNumberPicker.__docgenInfo,name:"AntdNumberPicker",path:"src/AntdNumberPicker.tsx#AntdNumberPicker"})}catch(__react_docgen_typescript_loader_error){}const AntdNumberPicker_stories={title:"Antd Number Picker",component:AntdNumberPicker,argTypes:{}},TemplateStandalone=args=>(0,jsx_runtime.jsx)(AntdNumberPicker,{...args});TemplateStandalone.displayName="TemplateStandalone";const Standalone=TemplateStandalone.bind({});Standalone.args={min:1,max:100};const TemplateWithForm=args=>{const[form]=es_form.Z.useForm();return(0,jsx_runtime.jsxs)(es_form.Z,{layout:"inline",form,onFinish:values=>{console.log(`form values: ${values.number}`)},initialValues:{number:3},children:[(0,jsx_runtime.jsx)(es_form.Z.Item,{name:"number",children:(0,jsx_runtime.jsx)(AntdNumberPicker,{...args})}),(0,jsx_runtime.jsx)(es_form.Z.Item,{children:(0,jsx_runtime.jsx)(es_button.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})]})};TemplateWithForm.displayName="TemplateWithForm";const WithForm=TemplateWithForm.bind({});WithForm.args={min:1,max:100},Standalone.parameters={...Standalone.parameters,docs:{...Standalone.parameters?.docs,source:{originalSource:"args => <AntdNumberPicker {...args} />",...Standalone.parameters?.docs?.source}}},WithForm.parameters={...WithForm.parameters,docs:{...WithForm.parameters?.docs,source:{originalSource:'args => {\n  type FormValues = {\n    number: number;\n  };\n  const [form] = Form.useForm<FormValues>();\n  const onFinish = (values: FormValues) => {\n    // eslint-disable-next-line no-console\n    console.log(`form values: ${values.number}`);\n  };\n  return <Form layout="inline" form={form} onFinish={onFinish} initialValues={{\n    number: 3\n  }}>\n      <Form.Item name="number">\n        <AntdNumberPicker {...args} />\n      </Form.Item>\n      <Form.Item>\n        <Button type="primary" htmlType="submit">\n          Submit\n        </Button>\n      </Form.Item>\n    </Form>;\n}',...WithForm.parameters?.docs?.source}}};const __namedExportsOrder=["Standalone","WithForm"]}}]);