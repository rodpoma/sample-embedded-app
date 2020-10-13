import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from "@shopify/polaris";

class AnotatedLayout extends React.Component {
  state = {
    discount: "10%",
    enabled: false,
  };

  render() {
    const {discount, enabled} = this.state;
    const contentStatus = enabled ? "Disabled" : "Enabled";
    const textStatus = enabled ? "enabled" : "disabled";
    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Default Discount"
            description="Add a product to Sample App, it will automatically be discounted."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange("discount")}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Price Updates"
            description="Temporarily disable all Sample App price updates"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              this setting is{" "}
              <TextStyle variation="strong">{textStatus}</TextStyle>
            </SettingToggle>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log("submission", this.state);
  };

  handleChange = field => {
    return value => this.setState({[field]: value});
  };
  handleToggle = () => {
    this.setState(({enabled}) => {
      return {enabled: !enabled};
    });
  };
}
export default AnotatedLayout;
