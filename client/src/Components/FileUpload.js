import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
});

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      count: undefined,
    };
  }

  componentDidMount() {}

  handleClose() {
    this.setState({
      open: false,
    });
  }

  addData = async (packet) => {
    axios.post('http://localhost:8000/api/evaluation/', packet).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState(
      {
        files: files,
        open: false,
      },
      () => {
        let reader = new FileReader();
        reader.onload = () => {
          this.setState({ count: reader.result.substring(0).length });
          let packet = {
            fileName: files[0].name,
            charCount: reader.result.substring(0).length,
          };
          this.addData(packet);
        };
        reader.readAsText(this.state.files[0]);
      }
    );
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Button
          variant='contained'
          color='default'
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={this.handleOpen.bind(this)}
        >
          Upload File
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['.pdf,.zip,.txt']}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
        {this.state.count === undefined ? (
          <p></p>
        ) : (
          <div>
            <p>Total word count: </p>
            <p>{this.state.count}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FileUpload);
