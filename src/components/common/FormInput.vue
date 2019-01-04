<script>
export default {
  name: 'FormInput',
  props: {
    detail: Object,
    modelForm: Object
  },
  render: function(createElement) {
    var self = this;
    return createElement(
      'FormItem',
      {
        props: {
          prop: this.detail.model,
          rules: [
            {
              pattern: this.detail.pattern || '',
              message: this.detail.name + ' 格式不對',
              trigger: 'blur'
            },
            {
              required: this.detail.isRequired,
              message: this.detail.name + ' 不能為空',
              trigger: 'blur'
            }
          ]
        }
      },
      [
        createElement('i-input', {
          props: {
            clearable: true,
            type: this.detail.type, //输入框类型，可选值为 text、password、textarea、url、email、date
            placeholder: this.detail.placeholder,
            maxlength: this.detail.maxlength || null,
            value: this.modelForm[this.detail.model]
          },
          on: {
            input: function(val) {
              self.modelForm[self.detail.model] = val;
              self.$emit('change-input', self.modelForm);
            }
          }
        })
      ]
    );
  },
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
<style lang="less" scoped>
</style>
