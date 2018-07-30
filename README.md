# contacts-picker

###  Usage

```
<ContactsPicker
        visible={selectorVisible}   模态框显示隐藏
        selectedStaffs={selectedStaffs} 选中的人
        selectedDept={selectedDept} 选中的部门
        actionsType={1} // 选人/选部门 类型
        handleCancel={() =>
            this.setState({ selectorVisible: false })
        }
        handleOk={this.handleSelectorOk} />     // 返回选中的人或部门的 item 数组
```
