<script>
export default {
  name: 'FormInput',
  props: {
    detail: Object,
    modelForm: Object
  },
  render: function(createElement) {
    return createElement(
      'FormItem',
      {
        props: {
          prop: this.detail.model,
          //rules:{required: true, message: 'can not be empty', trigger: 'blur'}
          required: this.detail.isRequired
        }
      },
      [
        createElement('i-input', {
          props: {
            //pattern: this.detail.pattern ? this.detail.pattern : '',
          },
          attrs: {
            placeholder: this.detail.placeholder,
            maxlength: this.detail.maxlength ? this.detail.maxlength : null,
            type: this.detail.type,
            clearable: true,
            value: this.modelForm[this.detail.model]
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
