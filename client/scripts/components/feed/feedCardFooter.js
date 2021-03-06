/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 14:23:17
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardFooter = React.createClass({

  render: function(){
    var likes = this.props.likes;
    var comments = this.props.comments;

    return (
      /* jshint ignore:start */
      <View>
        <Text>Do Workout</Text>
        <Text>Likes {likes}</Text>
        <Text>Comments {comments}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardFooter;
