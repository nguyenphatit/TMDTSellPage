import { element } from "protractor";
import { Topic } from "./../../_models/Topic";
import { TopicCreation } from "./../../_models/json/TopicCreation";
export class DataTopic {
  public listTopic: Topic[] = [];
  constructor() {
    this.listTopic.push(
      new Topic(
        "CD" + (this.listTopic.length + 1),
        "Lập trình mạng",
        "Không có gì hết ...",
        1
      )
    );
    this.listTopic.push(
      new Topic(
        "CD" + (this.listTopic.length + 1),
        "PHP",
        "Không có gì hết ...",
        1
      )
    );
    this.listTopic.push(
      new Topic(
        "CD" + (this.listTopic.length + 1),
        "PHP",
        "Không có gì hết ...",
        1
      )
    );
  }
  public addTopic(topic: TopicCreation): Topic {
    let topic_tmp = new Topic(
      "CD" + (this.listTopic.length + 1),
      topic.topicName,
      topic.topicDescription,
      topic.topicStatus
    );
    this.listTopic.push(topic_tmp);
    return topic_tmp;
  }
  public deleteTopic(topicId: string): boolean {
    for (var index = 0; index < this.listTopic.length; index++) {
      var element = this.listTopic[index];
      if (element.$topicID === topicId) {
        this.listTopic.slice(index, index + 1);
        return true;
      }
    }
    return false;
  }
  public getAllTopic(): Topic[] {
    return this.listTopic;
  }
}
