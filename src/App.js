import React, { Component } from 'react';
import './App.css';

/*var obj = [{
  "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#Collection(driveItem)",
  "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/drive/recent?$skiptoken=s!MjAwOzFkMjUxOThkLWE3OGMtNDhmMy04YWQ3LWYwYmYyMTViZDY1OQ",
  "value": [
      {
          "@odata.type": "#microsoft.graph.driveItem",
          "createdDateTime": "2017-09-06T10:44:39Z",
          "id": "01LUVSRSOQACVSTGJ5UNC3W6PRGANLLEMT",
          "lastModifiedDateTime": "2019-03-29T19:49:34Z",
          "name": "To do.one",
          "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/_layouts/15/WopiFrame.aspx?sourcedoc=%7B29AB00D0-3D99-45A3-BB79-F1301AB59193%7D&file=To%20do.one&action=default&wdorigin=Sharepoint&DefaultItemOpen=1",
          "size": 1130980,
          "createdBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "lastModifiedBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "file": {
              "mimeType": "application/msonenote"
          },
          "fileSystemInfo": {
              "createdDateTime": "2017-09-06T10:44:39Z",
              "lastModifiedDateTime": "2019-03-29T19:49:34Z"
          },
          "remoteItem": {
              "createdDateTime": "2017-09-06T10:44:39Z",
              "id": "01LUVSRSOQACVSTGJ5UNC3W6PRGANLLEMT",
              "lastModifiedDateTime": "2019-03-29T19:49:34Z",
              "name": "To do.one",
              "size": 1130980,
              "webDavUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Mark%20@%20Microsoft/To%20do.one",
              "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/_layouts/15/WopiFrame.aspx?sourcedoc=%7B29AB00D0-3D99-45A3-BB79-F1301AB59193%7D&file=To%20do.one&action=default&wdorigin=Sharepoint&DefaultItemOpen=1",
              "createdBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "file": {
                  "mimeType": "application/msonenote"
              },
              "fileSystemInfo": {
                  "createdDateTime": "2017-09-06T10:44:39Z",
                  "lastModifiedDateTime": "2019-03-29T19:49:34Z"
              },
              "lastModifiedBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "parentReference": {
                  "driveId": "b!HbVqlZPBB0K0zjFs634gpNHCnR6PAABJk0ZKMO2OL3PpQZQscMqWS6kEqSjWNN8p",
                  "driveType": "business",
                  "id": "01LUVSRSNIHT2ZB7YZJJDZEN7RIL67NLRD"
              },
              "sharepointIds": {
                  "listId": "2c9441e9-ca70-4b96-a904-a928d634df29",
                  "listItemId": "13",
                  "listItemUniqueId": "29ab00d0-3d99-45a3-bb79-f1301ab59193",
                  "siteId": "956ab51d-c193-4207-b4ce-316ceb7e20a4",
                  "siteUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com",
                  "webId": "1e9dc2d1-008f-4900-9346-4a30ed8e2f73"
              }
          }
      },
      {
          "@odata.type": "#microsoft.graph.driveItem",
          "createdDateTime": "2019-03-29T17:54:09Z",
          "id": "01LUVSRSPHTVF4YIQB2JDJF3R4GPKD2DNN",
          "lastModifiedDateTime": "2019-03-29T17:54:10Z",
          "name": "goog-pm-30-190127175952.pdf",
          "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/goog-pm-30-190127175952.pdf",
          "size": 850336,
          "createdBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "lastModifiedBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "file": {
              "mimeType": "application/pdf"
          },
          "fileSystemInfo": {
              "createdDateTime": "2019-03-29T17:54:09Z",
              "lastModifiedDateTime": "2019-03-29T17:54:10Z"
          },
          "remoteItem": {
              "createdDateTime": "2019-03-29T17:54:09Z",
              "id": "01LUVSRSPHTVF4YIQB2JDJF3R4GPKD2DNN",
              "lastModifiedDateTime": "2019-03-29T17:54:10Z",
              "name": "goog-pm-30-190127175952.pdf",
              "size": 850336,
              "webDavUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/goog-pm-30-190127175952.pdf",
              "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/goog-pm-30-190127175952.pdf",
              "createdBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "file": {
                  "mimeType": "application/pdf"
              },
              "fileSystemInfo": {
                  "createdDateTime": "2019-03-29T17:54:09Z",
                  "lastModifiedDateTime": "2019-03-29T17:54:10Z"
              },
              "lastModifiedBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "parentReference": {
                  "driveId": "b!HbVqlZPBB0K0zjFs634gpNHCnR6PAABJk0ZKMO2OL3PpQZQscMqWS6kEqSjWNN8p",
                  "driveType": "business",
                  "id": "01LUVSRSOQIDGILCEOYRDJQLRON5UY2LMF"
              },
              "sharepointIds": {
                  "listId": "2c9441e9-ca70-4b96-a904-a928d634df29",
                  "listItemId": "28723",
                  "listItemUniqueId": "cc4b9de7-0122-46d2-92ee-3c33d43d0dad",
                  "siteId": "956ab51d-c193-4207-b4ce-316ceb7e20a4",
                  "siteUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com",
                  "webId": "1e9dc2d1-008f-4900-9346-4a30ed8e2f73"
              }
          }
      },
      {
          "@odata.type": "#microsoft.graph.driveItem",
          "createdDateTime": "2019-03-29T17:44:33Z",
          "id": "01LUVSRSIVMQEXDNX3UVEZ2EGX2GZNSLDB",
          "lastModifiedDateTime": "2019-03-29T17:44:33Z",
          "name": "Evolving Role of PM.PDF",
          "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/Evolving%20Role%20of%20PM.PDF",
          "size": 498593,
          "createdBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "lastModifiedBy": {
              "user": {
                  "email": "Mark.Johnson@microsoft.com",
                  "displayName": "Mark Johnson"
              }
          },
          "file": {
              "mimeType": "application/pdf"
          },
          "fileSystemInfo": {
              "createdDateTime": "2019-03-29T17:44:33Z",
              "lastModifiedDateTime": "2019-03-29T17:44:33Z"
          },
          "remoteItem": {
              "createdDateTime": "2019-03-29T17:44:33Z",
              "id": "01LUVSRSIVMQEXDNX3UVEZ2EGX2GZNSLDB",
              "lastModifiedDateTime": "2019-03-29T17:44:33Z",
              "name": "Evolving Role of PM.PDF",
              "size": 498593,
              "webDavUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/Evolving%20Role%20of%20PM.PDF",
              "webUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com/Documents/Downloads/Evolving%20Role%20of%20PM.PDF",
              "createdBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "file": {
                  "mimeType": "application/pdf"
              },
              "fileSystemInfo": {
                  "createdDateTime": "2019-03-29T17:44:33Z",
                  "lastModifiedDateTime": "2019-03-29T17:44:33Z"
              },
              "lastModifiedBy": {
                  "user": {
                      "email": "Mark.Johnson@microsoft.com",
                      "displayName": "Mark Johnson"
                  }
              },
              "parentReference": {
                  "driveId": "b!HbVqlZPBB0K0zjFs634gpNHCnR6PAABJk0ZKMO2OL3PpQZQscMqWS6kEqSjWNN8p",
                  "driveType": "business",
                  "id": "01LUVSRSOQIDGILCEOYRDJQLRON5UY2LMF"
              },
              "sharepointIds": {
                  "listId": "2c9441e9-ca70-4b96-a904-a928d634df29",
                  "listItemId": "28722",
                  "listItemUniqueId": "71096415-fbb6-49a5-9d10-d7d1b2d92c61",
                  "siteId": "956ab51d-c193-4207-b4ce-316ceb7e20a4",
                  "siteUrl": "https://microsoft-my.sharepoint.com/personal/johmark_microsoft_com",
                  "webId": "1e9dc2d1-008f-4900-9346-4a30ed8e2f73"
              }
          }
      }
    ]
  }];*/

var obj = [
  {
    "_id": "5ca0e17e572868672249d433",
    "guid": "91b011e8-0e44-43f8-bb79-a418a30615d1",
    "tags": [
      "eu",
      "laboris"
    ]
  },
  {
    "_id": "5ca0e17e6bfffac6713777d0",
    "guid": "6ec51205-8b4f-4d51-af56-12abb4050b21",
    "tags": [
      "deserunt",
      "ullamco"
    ]
  },
  {
    "_id": "5ca0e17e47486802ea9e88f1",
    "guid": "6e48288b-0c78-4eb6-8eab-2f4074a23260",
    "tags": [
      "consequat",
      "tempor"
    ]
  }
];


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date(), wakeUpTime: 'Print element', alarm: ''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
    this.flattenJSON = this.flattenJSON.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState(state => ({wakeUpTime: 'Print element'}));
    document.getElementById("input").value = JSON.stringify(obj, null, 2); // spacing level = 2
    document.getElementById("pattern").value = "name";
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  handleClick() {
    this.setAlarm();
    //this.setState(state => ({alarm: "test"}));
  }

  flattenJSON(obj, pattern) {
    var result = [];
  
    // inner function that does all the work
    function recurse(path, obj) {
  
      // helper to append lines to the result
      function appendValue(key, value) {


        if (key !== pattern) {
          return;
        }

        console.log("Key: " + key + " Value: " + value)
  
        // another helper to join the path to the value
        const stringify = tail => path.concat(tail).join('_').toUpperCase();
  
        // attempt to match key as <name>_<type>
        const match = key.match(/^(.+?)_([^_]+)$/);
  
        // check if type is TextCheck, and if so handle it appropriately
        if (match && match[2] === 'TextCheck') {
          appendValue(`${match[1]}_CHECKBOX`, value !== null ? 'Y' : 'null');
          appendValue(`${match[1]}_TEXT`, value);
          return;
        }
  
        // any other types just get appended normally
        //result.push(`${stringify(key)}: ${value}`);
        //result.push('{"' + key + '": "' + value + '"}');
        result.push(value);
      }
  
      // iterate through object
      Object.keys(obj).forEach(key => {
        const value = obj[key];
  
        if (typeof value === 'object' && value !== null) {
          // recurse into nested objects
          recurse(path.concat(key), value);
        } else if (value instanceof Array) {
          // handle arrays
          value.forEach((value, index) => appendValue(`${key}_${index}`, value));
        } else {
          // all other values
          appendValue(key, value);
        }
      });
    }
  
    // kick off the flattening
    recurse([], obj);
  
    return result.join('\n');
  }

  setAlarm() {

    // get input string
    var obj = JSON.parse(document.getElementById("input").value);
    var pattern = document.getElementById("pattern").value;
    var output = '';

    var result = this.flattenJSON(obj, pattern);
    console.log(result);

    output = result;

    // iterate over each element in the array
    /*for (var i = 0; i < obj.length; i++){
      // look for the entry with a matching `code` value
      if (obj[i].code == pattern){
        // we found it
        output += obj[i].name;
      }
    }*/

    //perform processing
    /*if (str.includes(pattern)) {
      output = str.substring(str.indexOf(pattern), str.length);
    }*/

    //output string
    document.getElementById("output").value = output;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.wakeUpTime}</button>
        <div class='row'>
          <div class='column'>
            <div class='column-header'>
              <span><h4>Input</h4></span>
            </div>
          </div>
          <div class='column'>
            <div class='column-header'>
              <span><h4>Output</h4></span>
            </div>
          <input type="text" id="pattern"></input>
          </div>
        </div>
        <div class='row'>
          <div class='column'>
            <div class='main-column'>
              <textarea id="input" rows="" cols="" placeholder="Your .json object goes here"> 
                obj
               </textarea>
            </div>
          </div>
          <div class='column'>
            <div class='main-column'>
              <textarea id="output" rows="" cols="" placeholder="Output is generated here"> 


               </textarea>
            </div>
          </div>
        </div>
      </div>

      )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
