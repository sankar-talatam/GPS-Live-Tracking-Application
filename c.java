import java.util.ArrayList;

public class c{
    public static void main(String[]  args){
        String s = "c";
        int radius = 1;
        Node temp = head;
        ArrayList<Character> vill = new ArrayList<>();
        while(temp!=null){
            
            
            vill.add(temp.data);
            
            if(temp.next== s && !vill.isEmpty()){
                vill.remove(temp.data);
                temp.next.next;
            }
            temp=temp.next;
        }
        for(int i : vill){
            System.out.print(i+" ");
        }
    }
}