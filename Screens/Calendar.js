import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

class EventCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date().toISOString().split('T')[0],
      events: {
        '2023-10-10': [{ name: 'Event 1' }, { name1: 'Event 2' }],
        '2023-10-29': [{ name: 'Holi Festival' },{name1:'Diwali Festival'}],
       
        
      },
    };
  }

  render() {
    return (
      <View>
        <Calendar
          current={this.state.selectedDate}
          markedDates={this.state.events}
          onDayPress={(day) => {
            this.setState({ selectedDate: day.dateString });
          }}
        />
        {this.renderEvents()}
      </View>
    );
  }

  renderEvents() {
    const selectedDateEvents = this.state.events[this.state.selectedDate];

    if (!selectedDateEvents) {
      return (
        <View style={{ padding: 20 }}>
          <Text>No events for this date</Text>
        </View>
      );
    }

    return (
      <>
      <View style={{backgroundColor:'lightblue'}}>
        {selectedDateEvents.map((event, index) => (
          <View key={index} style={{ padding:10 }}>
            <Text>{event.name}</Text>
          </View>
        ))}
      </View>
       <View style={{backgroundColor:'red',marginTop:10}}>
       {selectedDateEvents.map((event, index) => (
         <View key={index} style={{ padding: 10}}>
           <Text style={{textAlign:'center'}}>{event.name}</Text>
         </View>
       ))}
     </View>
     </>
    );
  }
}

export default EventCalendar;
