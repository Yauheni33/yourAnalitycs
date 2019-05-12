class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.string :name
      t.text :surname
      t.text :name_channel
      t.string :email

      t.timestamps
    end
  end
end
