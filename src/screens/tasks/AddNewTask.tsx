import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  DateTimePickerComponent,
  DropdownPickerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
} from '../../components';
import {TaskModel} from '../../models/TaskModel';
import {Button, View} from 'react-native';

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: [],
};

function AddNewTask({navigation}: any) {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);

  const handleChangeValue = (key: string, value: string | Date) => {
    const item: any = {...taskDetail};
    item[key] = value;
    setTaskDetail(item);
  };

  const handleAddNewTask = () => {
    console.log(taskDetail);
  };

  return (
    <ContainerComponent back title="And new task">
      <SectionComponent>
        <InputComponent
          title="Title"
          placeholder="Title of task"
          value={taskDetail.title}
          allowClear
          onChange={val => handleChangeValue('title', val)}
        />
        <InputComponent
          title="Description"
          placeholder="Content"
          value={taskDetail.description}
          allowClear
          onChange={val => handleChangeValue('description', val)}
          multiple
          numberOfLine={3}
        />
        <DateTimePickerComponent
          title="Due date"
          placeholder="Choice"
          type="date"
          selected={taskDetail.dueDate}
          onSelect={val => handleChangeValue('dueDate', val)}
        />
        <RowComponent>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              title="Start"
              selected={taskDetail.start}
              type="time"
              onSelect={val => handleChangeValue('start', val)}
            />
          </View>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              title="End"
              selected={taskDetail.end}
              type="time"
              onSelect={val => handleChangeValue('end', val)}
            />
          </View>
        </RowComponent>
        <DropdownPickerComponent
          title="Members"
          selected={taskDetail.uids}
          items={[]}
          onSelect={val => console.log(val)}
          mutiple
        />
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent text="SAVE" onPress={handleAddNewTask} />
      </SectionComponent>
    </ContainerComponent>
  );
}

export default AddNewTask;
